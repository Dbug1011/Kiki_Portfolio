import React from "react";
import {
  SiArduino,
  SiBlender,
  SiProteus,
  SiFirebase,
  SiFlutter,
  SiAdobeillustrator,
  SiAdobelightroom,
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";
import { BsAndroid } from "react-icons/bs";
import { RiNextjsFill } from "react-icons/ri";
import Link from "next/link";
import { FaFigma } from "react-icons/fa";
import CIcon from "./cIcon";
import { Button } from "./moving-border";

const Icons = () => {
  return (
    <div className="flex gap-2 justify-around text-white text-5xl mx-auto w-full  ">
      <Button
        className="w-7 h-7 "
        borderClassName="w-7 h-7 hover:scale-125  transition-transform "
        containerClassName="w-7 h-7 hover:scale-125  transition-transform"
      >
        <SiArduino className="hover:scale-110 transition-transform" />
      </Button>

      <Button
        className="w-7 h-7 "
        borderClassName="w-7 h-7 hover:scale-125  transition-transform "
        containerClassName="w-7 h-7 hover:scale-125  transition-transform"
      >
        <BsAndroid className="hover:scale-110  transition-transform" />
      </Button>

      <Button
        className="w-7 h-7 "
        borderClassName="w-7 h-7 hover:scale-125  transition-transform "
        containerClassName="w-7 h-7 hover:scale-125  transition-transform"
      >
        <RiNextjsFill className="hover:scale-110 transition-transform" />
      </Button>

      <Button
        className="w-7 h-7 "
        borderClassName="w-7 h-7 hover:scale-125  transition-transform "
        containerClassName="w-7 h-7 hover:scale-125  transition-transform"
      >
        <SiBlender />
      </Button>

      <Button
        className="w-7 h-7 "
        borderClassName="w-7 h-7 hover:scale-125  transition-transform "
        containerClassName="w-7 h-7 hover:scale-125  transition-transform"
      >
        <SiProteus className="hover:scale-110 transition-transform" />
      </Button>

      <Button
        className="w-7 h-7 "
        borderClassName="w-7 h-7 hover:scale-125  transition-transform "
        containerClassName="w-7 h-7 hover:scale-125  transition-transform"
      >
        <FaFigma />
      </Button>

      <Button
        className="w-7 h-7 "
        borderClassName="w-7 h-7 hover:scale-125  transition-transform "
        containerClassName="w-7 h-7 hover:scale-125  transition-transform"
      >
        <SiFirebase />
      </Button>

      <Button
        className="w-7 h-7 "
        borderClassName="w-7 h-7 hover:scale-125  transition-transform "
        containerClassName="w-7 h-7 hover:scale-125  transition-transform"
      >
        <SiFlutter />
      </Button>

      <Button
        className="w-7 h-7 "
        borderClassName="w-7 h-7 hover:scale-125  transition-transform "
        containerClassName="w-7 h-7 hover:scale-125  transition-transform"
      >
        <SiAdobeillustrator />
      </Button>

      <Button
        className="w-7 h-7 "
        borderClassName="w-7 h-7 hover:scale-125  transition-transform "
        containerClassName="w-7 h-7 hover:scale-125  transition-transform"
      >
        <SiAdobelightroom />
      </Button>

      <Button
        className="w-7 h-7 "
        borderClassName="w-7 h-7 hover:scale-125  transition-transform "
        containerClassName="w-7 h-7 hover:scale-125  transition-transform"
      >
        <SiAdobephotoshop />
      </Button>

      <Button
        className="w-7 h-7 "
        borderClassName="w-7 h-7 hover:scale-125  transition-transform "
        containerClassName="w-7 h-7 hover:scale-125  transition-transform"
      >
        <SiAdobepremierepro />
      </Button>

      <Button
        className="w-7 h-7 "
        borderClassName="w-7 h-7 hover:scale-125  transition-transform "
        containerClassName="w-7 h-7 hover:scale-125  transition-transform"
      >
        <SiNextdotjs />
      </Button>

      <Button
        className="w-7 h-7 "
        borderClassName="w-7 h-7 hover:scale-125  transition-transform "
        containerClassName="w-7 h-7 hover:scale-125  transition-transform"
      >
        <SiJavascript />
      </Button>

      <Button
        className="w-7 h-7 "
        borderClassName="w-7 h-7 hover:scale-125  transition-transform "
        containerClassName="w-7 h-7 hover:scale-125  transition-transform"
      >
        <SiTailwindcss />
      </Button>

      <Button
        className="w-7 h-7 "
        borderClassName="w-7 h-7 hover:scale-125  transition-transform "
        containerClassName="w-7 h-7 hover:scale-125  transition-transform"
      >
        <SiGithub />
      </Button>

      <Button
        className="w-7 h-7 "
        borderClassName="w-7 h-7 hover:scale-125  transition-transform "
        containerClassName="w-7 h-7 hover:scale-125  transition-transform"
      >
        <CIcon />
      </Button>
    </div>
  );
};

export default Icons;
