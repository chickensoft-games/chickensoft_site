import { JSX } from "react";

interface YoutubeEmbedProps {
  embedUrl: string;
}

export default function YoutubeEmbed(props: YoutubeEmbedProps): JSX.Element {
  return (
    <div className="flex w-[100%] flex-row justify-center rounded-lg overflow-clip">
      <div className="relative w-[100%] pb-[56.25%] h-0">
        <iframe
          src={props.embedUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
          className="absolute top-0 left-0 w-[100%] h-[100%] border-0"
        ></iframe>
      </div>
    </div>
  );
}
