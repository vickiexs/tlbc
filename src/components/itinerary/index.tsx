import { useTheme } from "styled-components";
import { useMediaQuery } from "usehooks-ts";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { PortableText } from "@portabletext/react";

import Typography from "../typography";
import ItineraryCarouselCard from "./itinerary-carousel-card";
import Hr from "../../common/horizontal-rule";
import ArrowIcon from "../../common/icons/arrow";
import CaptionedImage from "../captioned-image";

import VerticalItinerary from "./vertical-itinerary";

import * as S from "./styled";
import { ItineraryProps } from "./type";

export default function Itinerary({
  description,
  timeline,
  additionalImages,
}: ItineraryProps) {
  const theme = useTheme();
  const isBreakpointLg = useMediaQuery(theme.breakpoints.lg);
  const isBreakpointMd = useMediaQuery(theme.breakpoints.md);

  return (
    <S.ItineraryContainer>
      <Typography variation="body">
        <PortableText value={description} />
      </Typography>
      {!isBreakpointMd ? (
        <Swiper
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
          <S.ButtonContainer>
            <div className="swiper-button-next">
              <ArrowIcon />
            </div>
            <div className="swiper-button-prev">
              <ArrowIcon />
            </div>
            <Hr color={theme.palette.white} />
          </S.ButtonContainer>
        </Swiper>
      ) : (
        <VerticalItinerary items={timeline} />
      )}
      {additionalImages && (
        <S.ImageContainer>
          {additionalImages.map((image, index) => (
            <CaptionedImage
              image={image.image}
              caption={image.caption}
              aspectRatio={182 / 109}
              key={index}
            />
          ))}
        </S.ImageContainer>
      )}
    </S.ItineraryContainer>
  );
}
