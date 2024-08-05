"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useSwitchContext } from "@/app/context/switch-context";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const NavbarItems = [
  {
    name: "Home",
    icon: "",
    label: "Home",
    url: "/",
  },
  {
    name: "About-Kiki",
    icon: "",
    label: "About-Kiki",
    url: "/about-kiki",
  },
  {
    name: "Ambot",
    icon: "",
    label: "ambot",
    url: "/ambot",
  },
  {
    name: "Mao",
    icon: "",
    label: "mao",
    url: "/mao",
  },
];

const Navbar = () => {
  const { isOn, setIsOn } = useSwitchContext();

  const handleSwitch = () => {
    const newIsOn = !isOn;
    setIsOn(newIsOn);
  };

  return (
    <div className="w-full flex md:items-start items-center text-white justify-between p-4 z-[999]">
      <div className="md:w-[200px] w-fit flex items-start gap-2 md:flex-row flex-col">
        <Switch onCheckedChange={handleSwitch} checked={isOn}></Switch>

        <span className="md:text-lg text-[0.500rem] animate-pulse text-nowrap text-white flex gap-2 items-center justify-center">
          <IoIosArrowDown className="md:rotate-90 rotate-180 " /> Toggle Me!
        </span>
      </div>
      <div className="font-roboto md:text-xl text-[.900rem] font-bold space-x-3 text-nowrap ">
        GET TO KNOW ME
      </div>
      <div className="flex justify-end md:w-[200px] w-fit">
        <Button
          asChild
          className="md:w-[100px] w-[65px] text-[.800rem]"
          font-roboto
          variant={"default-white"}
        >
          <Link href="/pdf/Karis-Ruth-Jumawan-FlowCV-Resume.pdf">Resume</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
