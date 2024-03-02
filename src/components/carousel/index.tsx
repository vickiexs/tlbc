import { useTheme } from "styled-components";
import { useMediaQuery } from "usehooks-ts";
import classNames from "classnames";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ArrowIcon from "../icons/arrow";

import { StyledCarouselContainer } from "./styled";
import { CarouselProps } from "./type";

export default function Carousel({
  children,
  loop = false,
  centeredSlides = false,
}: CarouselProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.md);
  const hideNavigationArrows = useMediaQuery(theme.breakpoints.sm);

  return (
    <StyledCarouselContainer className="carousel-container">
      <Swiper
        initialSlide={loop ? 1 : 0}
        spaceBetween={isMobile ? 12 : 20}
        slidesPerView="auto"
        modules={[Navigation]}
        loop={loop}
        centeredSlides={centeredSlides}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
        <div
          className={classNames("swiper-button-next", {
            hidden: hideNavigationArrows,
          })}
        >
          <ArrowIcon />
        </div>
        <div
          className={classNames("swiper-button-prev", {
            hidden: hideNavigationArrows,
          })}
        >
          <ArrowIcon />
        </div>
      </Swiper>
    </StyledCarouselContainer>
  );
}
