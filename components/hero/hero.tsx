import { JSX } from "react";
import ChickenContainer from "../chicken_container/chicken_container";

export default function Hero({
  content,
  graphic,
}: {
  content: JSX.Element;
  graphic: JSX.Element;
}): JSX.Element {
  return (
    <ChickenContainer fade="right">
      <div className="max-w-screen-xl mx-auto md:pl-8 lg:pl-8 2xl:pl-0">
        <div className="grid grid-cols-8 place-items-center relative">
          <div className="hero-contents lg:ml-8 col-span-8 lg:col-span-3 mt-8 lg:mt-0 sm:text-center z-[5]">
            {content}
          </div>
          <div className="py-3 col-span-8 w-full lg:col-span-5 z-[1] lg:-mr-44 lg:ml-0 -ml-44">
            {graphic}
          </div>
        </div>
      </div>
    </ChickenContainer>
  );
}
