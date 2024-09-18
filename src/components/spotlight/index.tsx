import { useMemo } from "react";
import { useTheme } from "styled-components";
import ReactPlayer from "react-player";
import Typewriter from "typewriter-effect";
import { useWindowSize } from "usehooks-ts";

import Image from "../image";

import {
  StyledSpotlightContainer,
  StyledBackgroundImage,
  StyledOverlay,
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
  videoUrl,
  darkText,
}: SpotlightProps) {
  const theme = useTheme();
  const size = useWindowSize();

  const playerSize: { width: string; height: string } = useMemo(() => {
    let playerWidth: number | string = size.height * (16 / 9);
    let playerHeight = "100dvh";

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
    <StyledSpotlightContainer id="spotlight">
      {videoUrl ? (
        <>
          <StyledVideoOverlay />
          <StyledTextOverlay darkText={darkText}>
            <StyledTextContainer>
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
          <StyledVideoContainer>
            <ReactPlayer
              className="react-player"
              url={videoUrl}
              playing
              loop
              muted
              width={playerSize.width}
              height={playerSize.height}
              strictMode={false}
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
        <StyledBackgroundImage>
          <StyledOverlay />
          <Image {...image} />
        </StyledBackgroundImage>
      )}
      <StyledTextOverlay darkText={darkText}>
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
      </StyledTextOverlay>
    </StyledSpotlightContainer>
  );
}
