import { existsSync } from "fs";
import fs from "fs/promises";
import { cn } from "fumadocs-ui/components/api";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { getImageSize } from "next/dist/server/image-optimizer";
import Image from "next/image";
import { join } from "path";
import { JSX } from "react";
import "server-only";

interface SiteImageProps {
  src: any;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  quality?: number;
}

export default async function SiteImage(
  props: SiteImageProps
): Promise<JSX.Element> {
  const path = join(process.cwd(), "public", props.src);

  const fileExists = existsSync(path);

  if (!fileExists) {
    return (
      <img
        src={props.src}
        alt={props.alt}
        style={props.style}
        className={cn("rounded-lg", props.className)}
      />
    );
  }

  const file = await fs.readFile(path);
  const size = await getImageSize(file);

  return (
    <Image
      src={props.src}
      alt={props.alt}
      width={size.width}
      height={size.height}
      style={props.style}
      className={cn("rounded-lg", props.className)}
    />
  );
}

export async function SiteImageZoom(
  props: SiteImageProps
): Promise<JSX.Element> {
  const path = join(process.cwd(), "public", props.src);

  const fileExists = existsSync(path);

  if (!fileExists) {
    return (
      <img
        src={props.src}
        alt={props.alt}
        className={cn("rounded-lg", props.className)}
      />
    );
  }

  const file = await fs.readFile(path);
  const size = await getImageSize(file);

  return (
    <ImageZoom
      src={props.src}
      alt={props.alt}
      width={size.width}
      height={size.height}
      style={props.style}
      quality={props.quality}
      className={cn("rounded-lg", props.className)}
    />
  );
}
