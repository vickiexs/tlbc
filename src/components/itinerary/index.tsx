import { useTheme } from "styled-components";
import { useMediaQuery } from "usehooks-ts";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { PortableText } from "@portabletext/react";

import Typography from "../typography";
import ItineraryCarouselCard from "./itinerary-carousel-card";
import Hr from "../horizontal-rule";
import ArrowIcon from "../icons/arrow";

import VerticalItinerary from "./vertical-itinerary";

import { StyledItineraryContainer, StyledButtonContainer } from "./styled";
import { ItineraryProps } from "./type";

export default function Itinerary({ description, timeline }: ItineraryProps) {
  const theme = useTheme();
  const isBreakpointLg = useMediaQuery(theme.breakpoints.lg);
  const isBreakpointMd = useMediaQuery(theme.breakpoints.md);

  return (
    <StyledItineraryContainer>
      <Typography variation="body">
        <PortableText value={description} />
      </Typography>
      {!isBreakpointMd ? (
        <Swiper
          // onRealIndexChange={(swiper) => setTimelineIndex(swiper.realIndex)}
          slidesPerView="auto"
          spaceBetween={isBreakpointLg ? 60 : 80}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {timeline.map((timelineItem, index) => (
            <SwiperSlide key={index}>
              <ItineraryCarouselCard {...timelineItem} />
            </SwiperSlide>
          ))}
          <StyledButtonContainer>
            <div className="swiper-button-next">
              <ArrowIcon />
            </div>
            <div className="swiper-button-prev">
              <ArrowIcon />
            </div>
            <Hr color={theme.palette.white} />
          </StyledButtonContainer>
        </Swiper>
      ) : (
        <VerticalItinerary items={timeline} />
      )}
    </StyledItineraryContainer>
  );
}
