import Image from "next/image";
import Navbar from "./components/UI/Navbar";
import { Button } from "@/components/ui/button";
import ExpandableCardDemo from "@/components/blocks/expandable-card-demo-grid";
import VideoHeader from "@/components/VideoHeader";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { cookies } from "next/headers";

const Home = () => {
  const cookieStore = cookies();
  const isOn = cookieStore.get("Switch")?.value;
  console.log(isOn);
  return (
    <main className="bg-[rgb(22,22,22)] w-full flex min-h-screen flex-col items-center justify-between  p-11">
      <div className="w-full flex flex-col min-h-screen bg-black p-5 rounded-md item-start justify-between relative ">
        <Navbar />

        {isOn ? (
        
          <VideoHeader />
        ) : (
          <div className="flex flex-col w-full h-full gap-5 px-5">
            <div className="text-white font-roboto font-extrabold text-7xl w-full">
              KARIS RUTH JUMAWAN
              <br />
              <TextRevealCard
                text="She Goes Tech"
                revealText="Software Developer"
              />
            </div>
            <button className="text-sm font-semibold px-6 py-3 border text-black bg-white border-white hover:bg-transparent hover:text-white rounded-full h-fit w-fit text-nowrap uppercase">
              Click Me
            </button>
            <div className="text-white font-roboto text-sm text-center mx-auto">
              @Kiki/2024
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
