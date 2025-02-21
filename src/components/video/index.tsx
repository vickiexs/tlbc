import { useState, useMemo } from "react";
import { useTheme } from "styled-components";
import ReactPlayer from "react-player/vimeo";
import { useMediaQuery } from "@uidotdev/usehooks";

import Image from "../../common/image";
import IconButton from "../icon-button";
import Icon from "../../common/icons";
import VideoOverlay from "./video-overlay";

import { StyledThumbnail } from "./styled";
import { VideoProps } from "./type";

export default function Video({
  videoUrl,
  thumbnail,
  mobileThumbnail,
}: VideoProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.md);

  const [displayModal, setDisplayModal] = useState(false);

  const thumbnailImage = useMemo(
    () => (isMobile ? mobileThumbnail : thumbnail),
    [isMobile, thumbnail, mobileThumbnail]
  );

  const openVideoOverlay = () => {
    const html = document.getElementsByTagName("html")[0];
    html.classList.add("lock-scroll");

    setDisplayModal(true);
  };

  const closeVideoOverlay = () => {
    const html = document.getElementsByTagName("html")[0];
    html.classList.remove("lock-scroll");

    setDisplayModal(false);
  };

  return (
    <>
      {!isMobile && (
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
      )}
      {thumbnailImage && isMobile && (
        <StyledThumbnail>
          <Image {...thumbnailImage} />
          {videoUrl && (
            <>
              <IconButton onClick={openVideoOverlay} className="play-icon">
                <Icon icon="playCircle" />
              </IconButton>
              <VideoOverlay
                videoUrl={videoUrl}
                open={displayModal}
                handleClose={closeVideoOverlay}
              />
            </>
          )}
        </StyledThumbnail>
      )}
    </>
  );
}
