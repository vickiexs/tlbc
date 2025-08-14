import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";
import Typewriter from "typewriter-effect";
import { useMediaQuery } from "@uidotdev/usehooks";

import Image from "../../common/image";

import * as S from "./styled";
import { SpotlightProps } from "./type";

export default function Spotlight({
  heading,
  subheadings,
  image,
  mobileImage,
  darkText,
  fixedHeight = false,
  video,
  videoWebOptimised,
}: SpotlightProps) {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.md);

  const location = useLocation();
  const isHomepage = location.pathname === "/";

  const spotlightImage = useMemo(
    () => (isMobile && mobileImage ? mobileImage : image),
    [isMobile, image, mobileImage]
  );

  return (
    <S.SpotlightContainer id="spotlight" fixedHeight={fixedHeight}>
      <S.TextOverlay darkText={darkText} isHomepage={isHomepage}>
        <S.TextContainer isHomepage={isHomepage}>
          <S.Heading>{heading}</S.Heading>
          {subheadings && (
            <S.Subtitle>
              <Typewriter
                options={{
                  strings: subheadings,
                  autoStart: true,
                  loop: true,
                }}
              />
            </S.Subtitle>
          )}
        </S.TextContainer>
      </S.TextOverlay>
      {video && videoWebOptimised ? (
        <>
          <S.VideoOverlay />
          <S.BackgroundVideo autoPlay loop muted playsInline>
            <source src={videoWebOptimised} type="video/webm" />
            <source src={video} type="video/mp4" />
          </S.BackgroundVideo>
        </>
      ) : (
        <S.BackgroundImage fixedHeight={fixedHeight}>
          <S.GradientOverlay />
          <S.Overlay />
          <Image {...spotlightImage} />
        </S.BackgroundImage>
      )}
    </S.SpotlightContainer>
  );
}
