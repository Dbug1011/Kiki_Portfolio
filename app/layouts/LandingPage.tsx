"use client";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import VideoHeader from "@/components/VideoHeader";
import React, { useState } from "react";
import { useSwitchContext } from "../context/switch-context";
import Navbar from "../components/UI/Navbar";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/moving-border";
import SkillsPageLayout from "./SkillsPage";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import SocialIcons from "@/components/ui/socialicons";
import { SiFacebook } from "react-icons/si";

const LandingPage = () => {
  const { isOn, setIsOn } = useSwitchContext();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const router = useRouter();
  const onClickButton = () => {
    // router.push('/skill-page');
    setIsClicked(!isClicked);
  };

  return (
    <div className="w-full h-full flex flex-row">
      <AnimatePresence>
        <div
          className={`${
            isClicked ? "w-1/2 rounded-l-lg" : "w-full  rounded-lg"
          } transition-transform flex flex-col h-full bg-black p-5 item-start justify-between relative`}
        >
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
              <div className="w-full flex flex-row gap-4">
                <Button onClick={onClickButton}>Achievements</Button>
              </div>
            </div>
          )}
          <div className="text-white font-roboto  text-[.9rem] text-center mx-auto">
            <SocialIcons />
          </div>
        </div>
        {isClicked && (
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "50%" }}
            exit={{ width: "0%" }}
          >
            <SkillsPageLayout />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
