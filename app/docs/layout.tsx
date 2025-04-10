import { baseOptions } from "@/app/layout.config";
import SiteFooter from "@/components/site_footer/site_footer";
import { docsLoader } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const pageTree = docsLoader.getPageTree();

  pageTree.children = pageTree.children.filter((page) => page.$id !== "");

  return (
    <>
      <DocsLayout
        tree={docsLoader.pageTree}
        {...{ ...baseOptions, links: [] }}
        themeSwitch={{ mode: "light-dark-system", enabled: true }}
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
          @media (min-width: 768px) {
          #chicken {
            top: 9px !important;
            left: 16px;
            height: calc(var(--spacing) * 9.5) !important;
          }

          #chicken-text {
            position: relative;
            top: 6px !important;
            left: 4px;
          }
        }

        .pb-6 {
          margin: 0px 18px;
        }
        `,
          }}
        />
        <div className="flex flex-col grow ">
          <div className="flex flex-row grow">{children}</div>
          <SiteFooter />
        </div>
      </DocsLayout>
    </>
  );
}
