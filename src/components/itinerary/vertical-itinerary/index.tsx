// import { useTheme } from "styled-components";
// import { useIntersectionObserver } from "@uidotdev/usehooks";

// import useDetectScroll from "@smakss/react-scroll-direction";
import { PortableText } from "@portabletext/react";

import Typography from "../../typography";

import {
  StyledItineraryContainer,
  StyledItems,
  StyledItemInfoContainer,
  StyledCardHeading,
  StyledVerticalLine,
  StyledTimelineBullet,
  // StyledVerticalLineMask,
} from "./styled";
import { HeadedContentBlockProps } from "../../headed-content-block/type";

interface VerticalItineraryProps {
  items: HeadedContentBlockProps[];
}

export default function VerticalItinerary({ items }: VerticalItineraryProps) {
  // const theme = useTheme();
  // const { scrollPosition } = useDetectScroll();

  // console.log("scroll-position:", scrollPosition);

  // const [ref, entry] = useIntersectionObserver({
  //   threshold: 0,
  //   root: null,
  //   rootMargin: "0px",
  // });

  return (
    <StyledItineraryContainer className="vertical-itinerary">
      {/* <StyledVerticalLineMask /> */}
      <StyledVerticalLine />
      {/* </StyledLineContainer> */}
      <StyledItems>
        {items.map((item, index) => (
          <StyledItemInfoContainer key={index}>
            <StyledTimelineBullet />
            <StyledCardHeading>{item.heading}</StyledCardHeading>
            <Typography variation="body">
              <PortableText value={item.content} />
            </Typography>
          </StyledItemInfoContainer>
        ))}
      </StyledItems>
    </StyledItineraryContainer>
  );
}
