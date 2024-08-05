"use client";
import { useRouter } from "next/navigation";
import React from "react";
import ExpandableCardDemo from "@/components/blocks/expandable-card-demo-grid";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Button } from "@/components/ui/moving-border";
import Icons from "@/components/ui/icons";
import { MdHome } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import Home from "../page";
const SkillsPageLayout = () => {
  const words = [
    { text: "Get" },
    { text: "to" },
    { text: "know" },
    { text: "me" },
    { text: "more" },
    { text: "!" },
  ];
  const router = useRouter();
  const onClickButton = () => {
    router.push("/");
  };
  const isMd = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div className="w-full flex flex-col h-full bg-black p-10 gap-y-3 item-start relative rounded-r-lg overflow-hidden">
      {/* <div className='text-white z-[999] flex justify-start gap-20'>
				<TypewriterEffect words={words} className='items-center flex' cursorClassName=' xl:h-8' />
			</div> */}
      <span className="flex flex-col h-fit gap-y-3 items-start justify-center ">
        {isMd ? null : (
          <button
            className="h-8 w-8 text-2xl text-white rounded-lg"
            onClick={onClickButton}
          >
            <MdHome />
          </button>
        )}
      </span>

      <div className="w-full h-fit mx-auto md:overflow overflow-hidden">
        <Icons />
      </div>

      <div className="flex flex-wrap w-full h-full gap-5 py-10 justify-around overflow-scroll [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
        <ExpandableCardDemo />
      </div>
    </div>
  );
};

export default SkillsPageLayout;
