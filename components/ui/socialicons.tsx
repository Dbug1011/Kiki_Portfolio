import React from "react";
import {
  SiInstagram,
  SiFacebook,
  SiTwitter,
  SiLinkedin,
  SiTiktok,
  SiYoutube,
  SiDiscord,
  SiGithub,
} from "react-icons/si";
import { BsAndroid } from "react-icons/bs";
import { RiNextjsFill } from "react-icons/ri";
import Link from "next/link";
import { FaFigma } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex gap-4 text-white text-xl mx-auto w-full">
      <Link href={"#"}>
        <SiInstagram className="hover:scale-150 transition-transform" />
      </Link>
      <Link href={"#"}>
        <SiFacebook className="hover:scale-150 transition-transform" />
      </Link>
      <Link href={"#"}>
        <SiTwitter className="hover:scale-150 transition-transform" />
      </Link>
      <Link href={"#"}>
        <SiTiktok className="hover:scale-150 transition-transform" />
      </Link>
      <Link href={"#"}>
        <SiYoutube className="hover:scale-150 transition-transform" />
      </Link>
      <Link href={"#"}>
        <SiLinkedin className="hover:scale-150 transition-transform" />
      </Link>
      <Link href={"#"}>
        <SiGithub className="hover:scale-150 transition-transform" />
      </Link>
    </div>
  );
};

export default SocialIcons;
