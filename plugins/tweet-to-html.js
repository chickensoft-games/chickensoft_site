// Based on a fork of tweet-to-html that hasn't made it in (as of Nov 2022)
// https://github.com/mehulkar/tweet-to-html/blob/mk/fixes/index.js

var twemoji = require('twemoji');

module.exports.parse = parseTweet;

var options = {};

function parseTweet(tweetObj, includes) {
  var entityProcessors = {
    hashtags: processHashTags,
    symbols: processSymbols,
    mentions: processUserMentions,
    urls: processUrls,
    media: processMedia,
  };

  var entities = tweetObj.entities || {};
  var processorObj;

  //When extended_mode is enabled, the text property will be empty and the value of the html property will be set to the full_text value
  //Replace the text property because the property is used in other functions (i.e. processUrls)
  if (tweetObj.full_text) {
    tweetObj.text = tweetObj.full_text;
  }

  //Copying text value to a new property html. The final output will be set to this property
  tweetObj.html = tweetObj.text;

  //Process entities
  if (Object.getOwnPropertyNames(entities).length) {
    [...Object.keys(entities)].forEach((entity) => {
      if (entities[entity].length) {
        processorObj = entities[entity];

        //Need to check if entity is media. If so, extended_entities should be used
        processorObj =
          entity === 'media' ? tweetObj.extended_entities.media : processorObj;

        var entityProcessorsFn = entityProcessors[entity];
        if (entityProcessorsFn) {
          entityProcessorsFn(processorObj, tweetObj, includes);
        } else {
          console.debug('No processor found for', entity);
        }
      }
    });
  }

  //Process Emoji's
  processEmoji(tweetObj);

  return tweetObj;
}

function processHashTags(tags, tweetObj) {
  tags.forEach((tagObj) => {
    var anchor = ('#' + tagObj.tag).link(
      'http://twitter.com/hashtag/' + tagObj.tag
    );
    tweetObj.html = tweetObj.html.replace('#' + tagObj.tag, anchor);
  });
}

function processSymbols(/*symbols, tweetObj*/) {}

function processUserMentions(users, tweetObj) {
  users.forEach((userObj) => {
    var anchor = ('@' + userObj.username).link(
      'http://twitter.com/' + userObj.username
    );
    var regex = new RegExp('@' + userObj.username, 'gi');
    tweetObj.html = tweetObj.html.replace(regex, anchor);
  });
}

function processUrls(urls, tweetObj, includes) {
  var media = includes.media ?? [];
  urls.forEach((urlObj) => {
    var start = urlObj.start;
    var end = urlObj.end;

    var urlToReplace = tweetObj.text.substring(start, end);
    var finalText = urlObj.display_url.link(urlObj.expanded_url);

    if (urlObj.media_key) {
      var content = media.find((m) => m.media_key === urlObj.media_key);
      if (content) {
        if (content.type === 'photo') {
          finalText = `<a href="${urlObj.expanded_url ?? ''}"><img src="${
            content.url ?? ''
          }"/></a>`;
        }
      }
    }

    tweetObj.html = tweetObj.html.replace(urlToReplace, finalText);
  });
}

function processMedia(media, tweetObj) {
  media.forEach((mediaObj) => {
    if (mediaObj.type === 'photo') {
      // Use HTTPS if available
      var src = mediaObj.media_url_https
        ? mediaObj.media_url_https
        : mediaObj.media_url;

      if (
        options &&
        options.photoSize &&
        mediaObj.sizes &&
        mediaObj.sizes[options.photoSize]
      ) {
        // If specified size is available, patch image src to use it
        src = src + ':' + options.photoSize;
      }

      var image = '<img src="' + src + '"/>';
      tweetObj.html = tweetObj.html.replace(mediaObj.url, image);
    } else if (mediaObj.type === 'video') {
      var source = '';
      mediaObj.video_info.variants.forEach((info) => {
        source +=
          '<source src="' + info.url + '" type="' + info.content_type + '">';
      });
      var video =
        '<video controls poster="' +
        mediaObj.media_url +
        '">' +
        source +
        '</video>';
      tweetObj.html = tweetObj.html.replace(mediaObj.url, video);
    }
  });
}

function processEmoji(tweetObj) {
  tweetObj.html = twemoji.parse(tweetObj.html);
}
