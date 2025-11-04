import { useTheme } from "styled-components";
import { useMediaQuery } from "usehooks-ts";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ArrowIcon from "../../common/icons/arrow";
import Hr from "../../common/horizontal-rule";

import * as S from "./styled";
import { CarouselProps } from "./type";

export default function Carousel({ children }: CarouselProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.md);

  return (
    <S.CarouselContainer className="carousel-container">
      <Swiper
        spaceBetween={isMobile ? 12 : 20}
        slidesPerView="auto"
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
        <S.ButtonContainer>
          <div className="swiper-button-next">
            <ArrowIcon />
          </div>
          <div className="swiper-button-prev">
            <ArrowIcon />
          </div>
          <Hr color={theme.palette.text} />
        </S.ButtonContainer>
      </Swiper>
    </S.CarouselContainer>
  );
}
