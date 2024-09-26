import React, { ReactNode } from "react";

const VideoContainer = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="w-screen h-screen relative overflow-hidden">
        <video
          className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-[-1]"
          autoPlay
          loop
          muted
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento e vídeo.
        </video>
        {children}
      </div>
    </>
  );
};

export default VideoContainer;
