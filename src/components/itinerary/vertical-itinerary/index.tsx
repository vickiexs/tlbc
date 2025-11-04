// import { useTheme } from "styled-components";
// import { useIntersectionObserver } from "@uidotdev/usehooks";

// import useDetectScroll from "@smakss/react-scroll-direction";
import { PortableText } from "@portabletext/react";

import Typography from "../../typography";

import * as S from "./styled";
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
    <S.ItineraryContainer className="vertical-itinerary">
      {/* <StyledVerticalLineMask /> */}
      <S.VerticalLine />
      {/* </StyledLineContainer> */}
      <S.Items>
        {items.map((item, index) => (
          <S.ItemInfoContainer key={index}>
            <S.TimelineBullet />
            <S.CardHeading>{item.heading}</S.CardHeading>
            <Typography variation="body">
              <PortableText value={item.content} />
            </Typography>
          </S.ItemInfoContainer>
        ))}
      </S.Items>
    </S.ItineraryContainer>
  );
}
