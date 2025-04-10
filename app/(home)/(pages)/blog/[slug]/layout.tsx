import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div id="blog-content-frame" className="blog-view flex flex-row grow">
      {children}
    </div>
  );
}
