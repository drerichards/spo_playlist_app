import React, { useState, useEffect, useRef } from "react";
import { PAUSE_ICON, PLAY_ICON } from "@/utils/assets";

interface AudioPlayerProps {
  previewUrl: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ previewUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create the audio object and store it in the ref
    audioRef.current = new Audio(previewUrl);
    const audio = audioRef.current;

    // Event listener to handle when audio finishes playing
    const handleAudioEnd = () => {
      setIsPlaying(false); // Set isPlaying to false when the audio ends
    };

    // Adding the event listener
    audio.addEventListener('ended', handleAudioEnd);

    // Cleanup function to handle component unmount or URL change
    return () => {
      audio.removeEventListener('ended', handleAudioEnd);
      audio.pause();
      audioRef.current = null; // Clean up the audio object
    };
  }, [previewUrl]); // Re-run this effect only if the previewUrl changes

  // Effect to toggle play/pause based on isPlaying state
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      isPlaying ? audio.play() : audio.pause();
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <button onClick={togglePlayPause}>
      {isPlaying ? (
        <div style={{ width: "24px", height: "24px", color: "orange" }}>
          {PAUSE_ICON}
        </div>
      ) : (
        <div style={{ width: "24px", height: "24px", color: "green" }}>
          {PLAY_ICON}
        </div>
      )}
    </button>
  );
};

export default AudioPlayer;
