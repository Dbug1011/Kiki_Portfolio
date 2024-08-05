import React from "react";

const VideoHeader = () => {
  return (
    <div className="absolute w-full h-full md:top-0 top-56 left-0 z-0 overflow-clip items-center">
      <video
        autoPlay
        loop
        playsInline
        muted
        src="/video/Kiki_PortfolioFinal.mp4"
      ></video>
    </div>
  );
};

export default VideoHeader;
