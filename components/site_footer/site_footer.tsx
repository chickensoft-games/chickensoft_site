import { site } from "@/app/global";
import { cn } from "fumadocs-ui/components/api";
import Link from "next/link";
import { JSX } from "react";
import ChickenContainer from "../chicken_container/chicken_container";
import SiteImage from "../site_image/site_image";

export type SiteFooterProps = {
  className?: string;
  children?: string | JSX.Element | JSX.Element[];
};

export default function SiteFooter(props: SiteFooterProps): JSX.Element {
  return (
    <footer
      className={cn(
        "min-h-[400px] px-4 bg-[var(--color-fd-background-dark)]",
        props.className
      )}
    >
      {/* Footer Container */}
      <ChickenContainer className="">
        <div className="my-8 mx-8 flex flex-col items-start justify-center lg:justify-start gap-4">
          <section className="flex flex-row justify-between grow gap-4 self-stretch flex-wrap">
            <section className="flex flex-row gap-4">
              <SiteImage
                src={site.logo}
                alt={site.title}
                className="mt-[0.25rem] h-[3rem] rounded-none max-w-[3rem]"
              />
              <div className="text-left">
                <p className="text-2xl text-[var(--logo-text-shimmer)] font-semibold mb-[-5px]">
                  Chickensoft
                </p>
                <h3 className="text-lg text-[var(--color-fd-muted-foreground)] font-semibold text-left">
                  {site.subtitle}
                </h3>
              </div>
            </section>
            <a href="https://www.netlify.com">
              {" "}
              <SiteImage
                src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg"
                alt="Deploys by Netlify"
                className="rounded-none"
              />{" "}
            </a>
          </section>
          <div className="flex flex-col items-start justify-center w-full">
            <div className="w-full flex flex-row flex-wrap gap-8 my-8 justify-center">
              {site.footerLinks.map((category) => (
                <div
                  key={category.title}
                  className="grow mr-2 flex flex-row items-start justify-start"
                >
                  <ul className="cols-span-1 text-left max-w-max flex flex-col gap-2">
                    <h4 className="text-[var(--color-fd-muted-foreground)] font-semibold">
                      {category.title}
                    </h4>
                    {category.links.map((link) => (
                      <li key={link.url}>
                        <Link href={link.url} className="hover:underline">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ChickenContainer>
    </footer>
  );
}
