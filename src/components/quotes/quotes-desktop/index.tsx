import { useState, useEffect, Fragment } from "react";
import { useTheme } from "styled-components";
import { useMediaQuery } from "usehooks-ts";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Typography from "../typography";
import Avatar from "../avatar";
import Image from "../image";
import Hr from "../horizontal-rule";
import ArrowIcon from "../icons/arrow";

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

export default function QuotesDesktop({ testimonials }: QuotesProps) {
  const theme = useTheme();

  const avatarSize = isBreakpointMd ? 45 : 60;
  const activeAvatarSize = isBreakpointMd ? 60 : 80;

  return (
    <StyledContainer>
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
            className="left-arrow-btn"
            onClick={() =>
              setActiveIndex(
                activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1
              )
            }
          >
            <ArrowIcon />
          </StyledArrowButton>
          <Hr color="rgba(0, 0, 0, 0.7)" />
          <StyledArrowButton
            className="right-arrow-btn"
            onClick={() =>
              setActiveIndex(
                activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1
              )
            }
          >
            <ArrowIcon />
          </StyledArrowButton>
        </StyledHr>
      </StyledImageLine>
      <StyledName>{`${testimonials[activeIndex].fullName} - ${testimonials[activeIndex].location}`}</StyledName>
    </StyledContainer>
  );
}
