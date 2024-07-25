import Image from "next/image";
import Navbar from "./components/UI/Navbar";
import { Button } from "@/components/ui/button";
import ExpandableCardDemo from "@/components/blocks/expandable-card-demo-grid";
import VideoHeader from "@/components/VideoHeader";
import { TextRevealCard } from "@/components/ui/text-reveal-card";

export default function Home() {
  return (
    <main className="bg-[rgb(22,22,22)] w-full flex min-h-screen flex-col items-center justify-between relative pt-11 pb-11 p-2">
      <ExpandableCardDemo />
      <VideoHeader />
      <div className="w-[95%] flex h-full flex-col bg-black p-5 rounded-md item-start justify-between ">
        <div>
          <Navbar />
        </div>
        <div className="flex flex-col gap-5 px-5">
          <div className="text-white font-roboto font-extrabold text-7xl w-full">
            
            KARIS RUTH JUMAWAN<br></br>
            <TextRevealCard
              text="She Goes Tech"
              revealText="Software Developer"
            ></TextRevealCard>
          </div>
          <button className="text-sm font-semibold px-6 py-3 border text-black bg-white border-white hover:bg-transparent hover:text-white rounded-full h-fit w-fit text-nowrap uppercase">
            Click Me
          </button>
        </div>
        <div className="text-white font-roboto text-sm text-center mx-auto ">
          @Kiki/2024
        </div>
      </div>
    </main>
  );
}
