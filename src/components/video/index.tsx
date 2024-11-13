import { useState, useMemo, useRef, useEffect } from "react";
import { useTheme } from "styled-components";
import ReactPlayer from "react-player/vimeo";
import { useMediaQuery } from "@uidotdev/usehooks";

import Image from "../../atoms/image";
import IconButton from "../icon-button";
import Icon from "../../atoms/icons";

import { StyledThumbnail } from "./styled";
import { VideoProps } from "./type";

export default function Video({
  videoUrl,
  thumbnail,
  mobileThumbnail,
}: VideoProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.md);

  const [isPlaying, setIsPlaying] = useState(false);

  const playerRef = useRef<ReactPlayer>(null);

  const thumbnailImage = useMemo(
    () => (isMobile ? mobileThumbnail : thumbnail),
    [isMobile, thumbnail, mobileThumbnail]
  );

  const openVideo = async () => {
    setIsPlaying(true);
    if (isMobile && playerRef.current?.getInternalPlayer()) {
      const videoElement =
        playerRef.current.getInternalPlayer() as HTMLVideoElement;
      if (videoElement.requestFullscreen) {
        try {
          await videoElement.requestFullscreen();
        } catch (error) {
          console.error("Failed to enter fullscreen:", error);
        }
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsPlaying(false);
      }
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  return (
    <>
      {!isMobile ? (
        <ReactPlayer
          url={videoUrl}
          controls
          width="100%"
          height="auto"
          style={{ aspectRatio: "640/270", marginTop: theme.spacing(5) }}
          config={{
            playerOptions: {
              title: true,
            },
          }}
        />
      ) : (
        <ReactPlayer
          ref={playerRef}
          url={videoUrl}
          playing={isPlaying}
          controls
          width="100%"
          height="auto"
          style={{
            aspectRatio: "640/270",
            marginTop: theme.spacing(5),
            position: "absolute",
            zIndex: "-1",
          }}
          config={{
            playerOptions: {
              title: true,
            },
          }}
        />
      )}
      {thumbnailImage && isMobile && (
        <StyledThumbnail>
          <Image {...thumbnailImage} />
          {videoUrl && (
            <>
              <IconButton onClick={() => openVideo()} className="play-icon">
                <Icon icon="playCircle" />
              </IconButton>
            </>
          )}
        </StyledThumbnail>
      )}
    </>
  );
}
