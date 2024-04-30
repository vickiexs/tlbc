import { useState, useEffect, Fragment } from "react";
import { useTheme } from "styled-components";
import { useMediaQuery } from "usehooks-ts";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import classNames from "classnames";

import Avatar from "../avatar";
import Image from "../image";
import Hr from "../horizontal-rule";
import ArrowIcon from "../icons/arrow";
import QuotesCarouselCard from "./quotes-mobile-card";

import {
  StyledContainer,
  StyledExcerpt,
  StyledImageLine,
  StyledImageContainer,
  StyledName,
  StyledHr,
  StyledArrowButton,
} from "./styled";
import { QuotesProps } from "./type";

export default function Quotes({ testimonials, darkMode }: QuotesProps) {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const isBreakpointMd = useMediaQuery(theme.breakpoints.md);
  const isBreakpointSm = useMediaQuery(theme.breakpoints.sm);

  const avatarSize = isBreakpointMd ? 45 : 60;
  const activeAvatarSize = isBreakpointMd ? 60 : 80;

  useEffect(() => {
    const id = setInterval(
      () =>
        setActiveIndex((index) =>
          index === testimonials.length - 1 ? 0 : index + 1
        ),
      7000
    );

    return () => {
      clearInterval(id);
    };
  }, [testimonials]);

  return (
    <StyledContainer>
      {isBreakpointSm ? (
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView="auto"
          loop
          centeredSlides
          pagination
          autoplay={{
            delay: 7000,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <QuotesCarouselCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Fragment>
          <StyledExcerpt>
            {`"${testimonials[activeIndex].testimonialExcerpt}"`}
          </StyledExcerpt>
          <StyledImageLine>
            {testimonials.map((testimonial, index) => (
              <StyledImageContainer>
                <Avatar
                  size={index === activeIndex ? activeAvatarSize : avatarSize}
                >
                  <Image {...testimonial.image} />
                </Avatar>
              </StyledImageContainer>
            ))}
            <StyledHr>
              <StyledArrowButton
                className={classNames("left-arrow-btn", {
                  "dark-mode": darkMode,
                })}
                onClick={() =>
                  setActiveIndex(
                    activeIndex === 0
                      ? testimonials.length - 1
                      : activeIndex - 1
                  )
                }
              >
                <ArrowIcon />
              </StyledArrowButton>
              <Hr
                color={darkMode ? theme.palette.white : "rgba(0, 0, 0, 0.7)"}
              />
              <StyledArrowButton
                className={classNames("right-arrow-btn", {
                  "dark-mode": darkMode,
                })}
                onClick={() =>
                  setActiveIndex(
                    activeIndex === testimonials.length - 1
                      ? 0
                      : activeIndex + 1
                  )
                }
              >
                <ArrowIcon />
              </StyledArrowButton>
            </StyledHr>
          </StyledImageLine>
          <StyledName>{`${testimonials[activeIndex].fullName} - ${testimonials[activeIndex].location}`}</StyledName>
        </Fragment>
      )}
    </StyledContainer>
  );
}
