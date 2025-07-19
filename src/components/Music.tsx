"use client";
import React, { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

const Music: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const musicRef = useRef<HTMLAudioElement | null>(null);

  const handleToggle = () => {
    if (musicRef.current) {
      if (playing) {
        musicRef.current.pause();
      } else {
        musicRef.current.volume = 0.75;
        musicRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  return (
    <div>
      <button
        onClick={handleToggle}
        className="flex cursor-pointer items-center text-white"
      >
        {playing ? <Pause size={25} /> : <Play size={25} />}
      </button>

      <audio ref={musicRef} src="hurt.mp3" />
    </div>
  );
};

export default Music;
