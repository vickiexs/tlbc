import { useRef } from "react";
import { useTheme } from "styled-components";
import { animated } from "react-spring";
import { useIntersectionObserver, useMediaQuery } from "@uidotdev/usehooks";
import useDetectScroll from "@smakss/react-scroll-direction";

import Image from "../../common/image";
import Link from "../../common/link";

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
  useDetectScroll();

  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  });

  const isMobile = useMediaQuery(theme.breakpoints.xs);

  const SCROLL_RATE = 0.075;
  const desktopImageHeight = 300;
  const mobileImageHeight = 175;

  const row1 = isMobile ? images.slice(0, 3) : images.slice(0, 5);
  const row2 = isMobile ? images.slice(3, 6) : images.slice(5, 10);
  const row3 = isMobile ? images.slice(6, 9) : images.slice(10, 15);
  const row4 = images.slice(9, 12);

  const rows = isMobile ? [row1, row2, row3, row4] : [row1, row2, row3];

  const containerRef = useRef<HTMLDivElement>(null!);

  let containerOffset: number;
  const imageContainer = document.getElementById("image-container");
  if (imageContainer && entry?.isIntersecting) {
    containerOffset = imageContainer.getBoundingClientRect().top;
  }

  return (
    <StyledContainer ref={ref}>
      <StyledImageContainer ref={containerRef} id="image-container">
        {rows.map((row, index) => (
          <animated.div
            style={{
              willChange: "transform",
              transform: `translateX(${
                !entry?.isIntersecting
                  ? 0
                  : index % 2 === 0
                  ? containerOffset * SCROLL_RATE
                  : containerOffset * -SCROLL_RATE
              }px)`,
            }}
            className="img-row"
            key={index}
          >
            <StyledRow>
              {row.map((image, index) => (
                <StyledImage key={index}>
                  <Image
                    {...image}
                    height={isMobile ? mobileImageHeight : desktopImageHeight}
                    noPreview
                  />
                </StyledImage>
              ))}
            </StyledRow>
          </animated.div>
        ))}
      </StyledImageContainer>
      {link && <Link label={link.label} link={link.link} />}
    </StyledContainer>
  );
}
