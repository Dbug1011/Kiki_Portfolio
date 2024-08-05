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
  SiYoutubetv,
} from "react-icons/si";
import { BsAndroid } from "react-icons/bs";
import { RiNextjsFill } from "react-icons/ri";
import Link from "next/link";
import { FaFigma } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex gap-4 text-white text-xl mx-auto w-full">
      <Link href={"https://www.instagram.com/kiii__ki11/"}>
        <SiInstagram className="hover:scale-150 transition-transform" />
      </Link>
      <Link href={"https://www.facebook.com/kikii1011/"}>
        <SiFacebook className="hover:scale-150 transition-transform" />
      </Link>
      <Link href={"https://x.com/kikiii__ki11"}>
        <SiTwitter className="hover:scale-150 transition-transform" />
      </Link>
      <Link href={"https://www.tiktok.com/@kikiimnida"}>
        <SiTiktok className="hover:scale-150 transition-transform" />
      </Link>
      <Link href={"https://www.youtube.com/channel/UCW801YOi_oZCHsWBRCv7Kpg"}>
        <SiYoutube className="hover:scale-150 transition-transform" />
      </Link>
      <Link href={"https://www.linkedin.com/in/karis-ruth-jumawan/"}>
        <SiLinkedin className="hover:scale-150 transition-transform" />
      </Link>
      <Link href={"https://github.com/Dbug1011"}>
        <SiGithub className="hover:scale-150 transition-transform" />
      </Link>
      <Link href={"discordapp.com/users/dbug1011"}>
        <SiDiscord className="hover:scale-150 transition-transform" />
      </Link>
    </div>
  );
};

export default SocialIcons;
