import useGlobalData from '@docusaurus/useGlobalData';
import SocialPost from '@site/src/components/social_post/social_post';
import React from 'react';

export type Tweet = {
  server: string;
  id: string;
};

export default function Tweet(props: Tweet): JSX.Element {
  var data = useGlobalData();
  console.log('global data = ', JSON.stringify(data, null, 2));
  var tweets = data['docusaurus-plugin-content-blog']['blog']['twitterData'];
  console.log('tweets = ', JSON.stringify(tweets, null, 2));
  var tweet = tweets[props.id];
  return <SocialPost data={tweet} provider="twitter" />;
}
