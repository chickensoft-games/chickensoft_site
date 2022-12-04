import createDOMPurify from 'dompurify';
import React, { useEffect, useState } from 'react';
import SocialPost, { SocialPostData } from './social_post';

export type TootProps = {
  server: string;
  tootId: string;
};

export default function Toot(props: TootProps): JSX.Element {
  const [data, setData] = useState<SocialPostData>({});

  var requestUrl = `https://${props.server}/api/v1/statuses/${props.tootId}`;

  useEffect(() => {
    var DOMPurify = createDOMPurify(window);
    let request = new XMLHttpRequest();
    request.onload = function () {
      let data = JSON.parse(this.response);

      if (request.status != 200) {
        return;
      }

      var toot: SocialPostData = {
        url: data.url,
        createdAt: data.created_at,
        content: DOMPurify.sanitize(data.content ?? ''),
        favoritesCount: data.favourites_count,
        reblogsCount: data.reblogs_count,
        account: {
          username: data.account?.username
            ? '@' + data.account?.username + '@' + props.server
            : '',
          displayName: data.account?.display_name,
          url: data.account?.url,
          avatarUrl: data.account?.avatar,
        },
        attachments: data.media_attachments.map((attachment: any) => {
          return {
            type: attachment.type,
            url: attachment.url,
          };
        }),
      };

      setData(toot);
    };

    request.open('GET', requestUrl, true);
    request.send();
  }, []);

  return <SocialPost data={data} provider="mastodon" />;
}
