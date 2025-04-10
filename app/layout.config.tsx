import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <div
          id="chicken"
          style={{
            width: 56,
            height: "calc(var(--spacing) * 12)",
            backgroundSize: "cover",
            position: "relative",
            bottom: -10,
            pointerEvents: "all",
          }}
        ></div>
        <div className="text-pop superpop">
          <span
            id="chicken-text"
            className="text-xl text-[var(--logo-text)] font-semibold"
          >
            Chickensoft
          </span>
        </div>
      </>
    ),
  },
  githubUrl: "https://github.com/chickensoft-games/",
  links: [
    {
      text: "Blog",
      url: "/blog",
    },
    {
      text: "Team",
      url: "/team",
    },
    {
      text: "Docs",
      url: "/docs",
    },
    {
      text: "About",
      url: "/about",
    },
  ],
};
