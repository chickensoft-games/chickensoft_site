import { baseOptions } from "@/app/layout.config";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...{
        ...baseOptions,
        themeSwitch: { mode: "light-dark-system", enabled: false },
      }}
    >
      {/* Cache the chicken's hover image so it doesn't flicker on hover */}
      <div
        className="w-0 h-0"
        style={{
          backgroundImage: "url(/img/chickensoft_logo_hover.svg)",
        }}
      ></div>
      {children}
    </HomeLayout>
  );
}
