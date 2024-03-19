import { useRef } from "react";
import { useTheme } from "styled-components";
import { animated } from "react-spring";
import {
  useWindowScroll,
  useIntersectionObserver,
  useMediaQuery,
} from "@uidotdev/usehooks";

import Image from "../image";
import Link from "../link";

import {
  StyledContainer,
  StyledImageContainer,
  StyledRow,
  StyledImage,
} from "./styled";
import { ScrollingImagesProps } from "./type";

export default function ScrollingImages({
  images,
  link,
}: ScrollingImagesProps) {
  const theme = useTheme();
  const [{ y }] = useWindowScroll();

  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });
  const isMobile = useMediaQuery(theme.breakpoints.md);

  const desktopImageHeight = 300;
  const mobileImageHeight = 150;

  const row1 = isMobile ? images.slice(0, 4) : images.slice(0, 6);
  const row2 = isMobile ? images.slice(5, 9) : images.slice(7, 13);
  const row3 = isMobile
    ? images.slice(10, 14)
    : images.slice(14, images.length);
  const row4 = images.slice(15, images.length);

  const rows = isMobile ? [row1, row2, row3, row4] : [row1, row2, row3];

  const containerRef = useRef<HTMLDivElement>(null!);

  return (
    <StyledContainer ref={ref}>
      <StyledImageContainer ref={containerRef}>
        {rows.map((row, index) => (
          <animated.div
            style={{
              transform: `translateX(${index % 2 === 0 ? "" : "-"}${
                entry?.isIntersecting && y ? y * 0.075 : 0
              }px)`,
            }}
          >
            <StyledRow key={index}>
              {row.map((image, index) => (
                <StyledImage
                  aspectRatio={image.asset.metadata.dimensions.aspectRatio}
                  key={index}
                >
                  <Image
                    {...image}
                    height={isMobile ? mobileImageHeight : desktopImageHeight}
                  />
                </StyledImage>
              ))}
            </StyledRow>
          </animated.div>
        ))}
      </StyledImageContainer>
      <Link label={link.label} link={link.link} />
    </StyledContainer>
  );
}
