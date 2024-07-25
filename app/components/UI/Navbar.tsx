"use client";
import Link from "next/link";
import React, { FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import VideoHeader from "@/components/VideoHeader";

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
  const [isOn, setIsOn] = useState(false);
  const [kiki, setKiki] = useState("");
  const handleSwitch = () => {
    setIsOn(!isOn);
    setCookie("Switch", isOn);
  };

  useEffect(() => {
    if (isOn) {
      PlayMyVideo();
      setKiki("video");
    } else {
      setKiki("text");
    }
  }, [isOn]);

  useEffect(() => {
    if (cookies.Switch) {
      setIsOn(cookies.Switch);
    }
  }, [cookies.Switch]);
  console.log(kiki);

  return (
    <div className="w-full  flex items-start text-white  justify-between p-4 ">
      <div className="w-[120px]">
        <Switch onCheckedChange={() => handleSwitch()} checked={isOn}></Switch>
      </div>

      <div className="font-roboto text-xl font-bold space-x-3">
        GET TO KNOW ME
      </div>
      <Button className="w-[120px]" variant={"default-white"}>
        RESUME
      </Button>
    </div>
  );
};

export default Navbar;
