"use client";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import VideoHeader from "@/components/VideoHeader";
import React from "react";
import { useSwitchContext } from "../context/switch-context";
import Navbar from "../components/UI/Navbar";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";

const LandingPage = () => {
  const { isOn, setIsOn } = useSwitchContext();
  const router = useRouter();
  const onClickButton = () => {
    router.push(`/skill-page`);
  };

  return (
    <div className="w-full flex flex-col h-full md:bg-black bg-white p-5 rounded-md item-start justify-between relative">
      <Navbar />
      {isOn ? (
        <VideoHeader />
      ) : (
        <div className="flex flex-col w-full h-fit gap-5 px-5 justify-between">
          <div className="text-white font-roboto font-extrabold text-7xl w-full">
            KARIS RUTH JUMAWAN
            <br />
            <TextRevealCard
              text="She Goes Tech"
              revealText="Software Developer"
            />
          </div>
          <Button onClick={onClickButton}>Click Me</Button>
        </div>
      )}
      <div className="text-white font-roboto text-sm text-center mx-auto">
        @Kiki/2024
      </div>
    </div>
  );
};

export default LandingPage;
