import { cn } from "fumadocs-ui/components/api";
import { JSX } from "react";
import "server-only";
import { SiteImageZoom } from "../site_image/site_image";

interface FancyImageProps {
  src: any;
  alt: string;
  className?: string;
  children?: JSX.Element[];
  widthOverride?: string;
  centered?: boolean;
}

export default async function FancyImage(
  props: FancyImageProps
): Promise<JSX.Element> {
  return (
    <figure
      style={{ margin: "0px 0px var(--ifm-leading)", textAlign: "center" }}
    >
      <SiteImageZoom
        src={props.src}
        alt={props.alt}
        style={{ width: props.widthOverride ? props.widthOverride : "100%" }}
        className={cn(
          props.className ? props.className : "rounded-lg",
          props.centered ? "mx-auto" : ""
        )} // Apply centered class if `centered` is true
      />
      <figcaption
        style={{
          fontSize: "0.8rem",
          fontStyle: "italic",
          textAlign: "center",
        }}
      >
        {props.children}
      </figcaption>
    </figure>
  );
}
