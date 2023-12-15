import clsx from 'clsx';
import React from 'react';
import css from './youtube_embed.module.css';

interface YoutubeEmbedProps {
  embedUrl: string;
}

export default function YoutubeEmbed(props: YoutubeEmbedProps): JSX.Element {
  return (
    <div className={clsx(css.youtubeOuterContainer)}>
      <div className={clsx(css.youtubeContainer)}>
        <iframe
          src={props.embedUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
          className={clsx(css.youtubeIFrame)}
        ></iframe>
      </div>
    </div>
  );
}
