import SiteFooter from "@/components/site_footer/site_footer";
import { type ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="container grow flex flex-col overflow-y-clip mb-8">
        {children}
      </div>
      <SiteFooter />
    </>
  );
}
