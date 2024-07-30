"use client";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import VideoHeader from "@/components/VideoHeader";
import React from "react";
import ExpandableCardDemo from "@/components/blocks/expandable-card-demo-grid";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Button } from "@/components/ui/moving-border";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SkillsPage = () => {
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
    router.push(`/`);
  };
  return (
    <div className="w-full flex flex-col h-full md:bg-black gap-y-3 bg-white p-4 rounded-md item-start justify-between relative">
      <div className="text-white z-[999] ">
        <Button onclick={onClickButton}>
          Home
        </Button>
        <TypewriterEffect words={words} />
      </div>
      <span className="gap-4"></span>
      <div className="flex flex-col bg-[rgb(22,22,22)] w-1/2 h-fit gap-5 py-10 px-5 justify-between ">
        <ExpandableCardDemo />
      </div>
    </div>
  );
};

export default SkillsPage;
