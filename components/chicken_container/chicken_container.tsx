import { cn } from "fumadocs-ui/components/api";
import { JSX } from "react";

/**
 * This matches the width of the Fumadocs header
 * (which is different from tailwind :P).
 */
export default function ChickenContainer({
  children,
  className,
  fade = "none",
  preserve,
}: {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
  fade?: "left" | "right" | "both" | "none";
  preserve?: boolean;
}): JSX.Element {
  return (
    <section
      className={cn(
        "pt-2 w-full max-w-fd-container lg:w-[calc(100%-1rem)] mx-auto relative ",
        preserve ? "overflow-x-visible" : "overflow-x-clip",
        className
      )}
    >
      {(fade == "left" || fade == "both") && (
        <div
          className="fade-content absolute overflow-visible pointer-events-none w-[75px] h-[100%] z-10 left-0 invisible lg:visible xl:visible"
          style={{
            boxShadow: "inset 75px 0px 37.5px -30px var(--color-fd-background)",
          }}
        ></div>
      )}

      {(fade == "right" || fade == "both") && (
        <div
          className="fade-content absolute overflow-visible pointer-events-none w-[75px] h-[100%] z-10 right-0 invisible lg:visible xl:visible"
          style={{
            boxShadow: "inset -75px 0px 25px -30px var(--color-fd-background)",
          }}
        ></div>
      )}
      {children}
    </section>
  );
}
