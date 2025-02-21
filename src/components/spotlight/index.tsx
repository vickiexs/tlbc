import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";
import ReactPlayer from "react-player";
import Typewriter from "typewriter-effect";
import { useWindowSize } from "usehooks-ts";
import { useMediaQuery } from "@uidotdev/usehooks";

import Image from "../../common/image";

import {
  StyledSpotlightContainer,
  StyledBackgroundImage,
  StyledOverlay,
  StyledGradientOverlay,
  StyledVideoOverlay,
  StyledTextOverlay,
  StyledTextContainer,
  StyledHeading,
  StyledSubtitle,
  StyledVideoContainer,
} from "./styled";
import { SpotlightProps } from "./type";

export default function Spotlight({
  heading,
  subheadings,
  image,
  mobileImage,
  videoUrl,
  darkText,
  fixedHeight = false,
}: SpotlightProps) {
  const theme = useTheme();
  const size = useWindowSize();

  const isMobile = useMediaQuery(theme.breakpoints.md);

  const location = useLocation();
  const isHomepage = location.pathname === "/";

  const spotlightImage = useMemo(
    () => (isMobile && mobileImage ? mobileImage : image),
    [isMobile, image, mobileImage]
  );

  const playerSize: { width: string; height: string } = useMemo(() => {
    let playerWidth: number | string = size.height * (16 / 9);
    let playerHeight = "100svh";

    if (size.width > playerWidth) {
      playerWidth = "100vw";
      playerHeight = `${size.width * (9 / 16)}px`;

      return {
        width: playerWidth,
        height: playerHeight,
      };
    }

    return {
      width: `${playerWidth}px`,
      height: playerHeight,
    };
  }, [size]);

  return (
    <StyledSpotlightContainer id="spotlight" fixedHeight={fixedHeight}>
      <StyledTextOverlay darkText={darkText} isHomepage={isHomepage}>
        <StyledTextContainer isHomepage={isHomepage}>
          <StyledHeading>{heading}</StyledHeading>
          {subheadings && (
            <StyledSubtitle>
              <Typewriter
                options={{
                  strings: subheadings,
                  autoStart: true,
                  loop: true,
                }}
              />
            </StyledSubtitle>
          )}
        </StyledTextContainer>
      </StyledTextOverlay>
      {videoUrl ? (
        <>
          <StyledVideoOverlay />
          <StyledVideoContainer>
            <ReactPlayer
              className="react-player"
              url={videoUrl}
              playing
              loop
              muted
              width={playerSize.width}
              height={playerSize.height}
              style={{
                position: "relative",
                left: "50%",
                top: "50%",
                transform: "translateX(-50%) translateY(-50%)",
                backgroundColor: theme.palette.white,
              }}
            />
          </StyledVideoContainer>
        </>
      ) : (
        <StyledBackgroundImage fixedHeight={fixedHeight}>
          <StyledGradientOverlay />
          <StyledOverlay />
          <Image {...spotlightImage} />
        </StyledBackgroundImage>
      )}
    </StyledSpotlightContainer>
  );
}
