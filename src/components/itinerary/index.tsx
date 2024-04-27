import { PortableText } from "@portabletext/react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "usehooks-ts";
import theme from "../../theme";
import { HeadedContentBlockProps } from "../headed-content-block/type";
import Typography from "../typography";
import { ExpandingHorizontalRule, StyledTimeline, StyledTimelineContainer } from "./style";
import { ItineraryProps } from "./type";
import HorizontalRule from "../horizontal-rule";

export default function Itinerary(itinerary: ItineraryProps) {
  const isMobile = useMediaQuery(theme.breakpoints.md);

  return (
    <>
      <Typography variation="body">
        <PortableText value={itinerary.description} />
      </Typography>
      {isMobile
        ? TimelineMobile(itinerary.timeline)
        : TimelineWeb(itinerary.timeline)}
    </>
  );
}

function TimelineWeb(timeline: HeadedContentBlockProps[]) {
  const [timelineIndex, setTimelineIndex] = useState(0);

  return (
    <StyledTimelineContainer>
      <Swiper
        onRealIndexChange={(swiper) => setTimelineIndex(swiper.realIndex)}
        spaceBetween={80}
      >
        {timeline.map((child, index) => (
          <SwiperSlide key={index}>
            <PortableText value={child.content} />
            <StyledTimeline>
              <HorizontalLine />
              <RadioDot active={index === timelineIndex} />
              <HorizontalLine />
            </StyledTimeline>
            <Typography variation="body">{child.heading}</Typography>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledTimelineContainer>
  );
}
function TimelineMobile(timeline: HeadedContentBlockProps[]) {
  return <h1>mobile</h1>;
}
