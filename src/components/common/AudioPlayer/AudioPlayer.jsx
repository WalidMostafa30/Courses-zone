import { useState, useRef } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const duration = 16 * 60 + 23;
  const currentTime = 7 * 60 + 23;

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex w-full items-center gap-4 p-4">
      <div className="flex flex-grow items-center">
        <span className="text-lg text-gray-600">16:23</span>

        <div className="relative mx-2 h-1 flex-1 rounded bg-gray-300">
          <span
            className="absolute left-0 h-1 rounded bg-main-clr-1"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
          <span
            className="absolute top-1/2 h-3 w-3 -translate-y-1/2 transform rounded-full bg-main-clr-2"
            style={{ left: `${(currentTime / duration) * 100}%` }}
          />
        </div>

        <span className="text-lg text-gray-600">07:23</span>
      </div>

      <button
        onClick={togglePlay}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-main-clr-1 text-main-clr-2"
      >
        {isPlaying ? <FaPlay /> : <FaPause />}
      </button>

      <audio ref={audioRef} src="/sample.mp3" />
    </div>
  );
}
