"use client";
import React, { useState, useRef, useEffect, useMemo } from "react";

interface YouTubePlayerConfig {
  videoId: string;
  playerVars: {
    autoplay: number;
    controls: number;
    modestbranding: number;
    rel: number;
    showinfo: number;
  };
  events: {
    onReady: (event: YT.PlayerEvent) => void;
  };
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: {
      Player: new (elementId: string, config: YouTubePlayerConfig) => YT.Player;
    };
  }
  
  namespace YT {
    interface Player {
      playVideo(): void;
      destroy(): void;
    }
    
    interface PlayerEvent {
      target: Player;
    }
  }
}

const OurMissionVideos = () => {
  const [playingVideo, setPlayingVideo] = useState<Set<number>>(new Set());
  const playerRefs = useRef<{ [key: number]: YT.Player | null }>({});

  const videos = useMemo(() => [
    {
      id: 1,
      title: "YouTube video player 1",
      videoId: "6CFYIOF89hc",
    },
    {
      id: 2,
      title: "YouTube video player 2",
      videoId: "HQ1uzB0somI",
    },
  ], []);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    const currentRefs = playerRefs.current;

    window.onYouTubeIframeAPIReady = () => {
      videos.forEach((video) => {
        new window.YT.Player(`youtube-player-${video.id}`, {
          videoId: video.videoId,
          playerVars: {
            autoplay: 0,
            controls: 1,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
          },
          events: {
            onReady: (event: YT.PlayerEvent) => {
              currentRefs[video.id] = event.target;
            },
          },
        });
      });
    };

    return () => {
      Object.values(currentRefs).forEach((player: YT.Player | null) => {
        if (player) {
          player.destroy();
        }
      });
    };
  }, [videos]);

  const handlePlayClick = (videoId: number) => {
    const player = playerRefs.current[videoId];
    if (player && player.playVideo) {
      player.playVideo();
      setPlayingVideo((prev) => new Set(prev).add(videoId));
    }
  };

  return (
    <div className="bg-[#555454] px-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {videos.map((video) => (
          <div key={video.id} className="relative min-h-[300px] md:min-h-[600px]">
            <div
              id={`youtube-player-${video.id}`}
              className="absolute inset-0 w-full h-full"
            ></div>

            {!playingVideo.has(video.id) && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer transition-all duration-300">
                <button
                  onClick={() => handlePlayClick(video.id)}
                  className="group relative w-20 h-20 md:w-24 md:h-24 bg-white bg-opacity-90 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-opacity-100 hover:scale-110 shadow-2xl"
                >
                  <div className="w-0 h-0 border-l-[20px] md:border-l-[24px] border-l-black border-t-[12px] md:border-t-[14px] border-t-transparent border-b-[12px] md:border-b-[14px] border-b-transparent ml-1 md:ml-1.5 transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 rounded-full border-2 border-white opacity-60 animate-ping" />
                  <div
                    className="absolute inset-0 rounded-full border-2 border-white opacity-40 animate-ping"
                    style={{ animationDelay: "0.5s" }}
                  />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMissionVideos;
