import React from "react";

const VideoHeader = () => {
  return (
    <div>
      <video
        autoPlay
        loop
        playsInline
        muted
        width="320"
        height="240"
        src="/video/Kiki_Vidfolio.mp4"
      ></video>
    </div>
  );
};

export default VideoHeader;
