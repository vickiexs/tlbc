import { useState, useEffect, Fragment } from "react";
import { useTheme } from "styled-components";
import { useMediaQuery } from "usehooks-ts";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import classNames from "classnames";

import Avatar from "../../common/avatar";
import Image from "../../common/image";
import Hr from "../../common/horizontal-rule";
import ArrowIcon from "../../common/icons/arrow";
import Link from "../../common/link";
import QuotesCarouselCard from "./quotes-mobile-card";

import * as S from "./styled";
import { QuotesProps } from "./type";

export default function Quotes({ quotes, link, darkMode }: QuotesProps) {
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
          index === quotes.length - 1 ? 0 : index + 1
        ),
      7000
    );

    return () => {
      clearInterval(id);
    };
  }, [quotes]);

  return (
    <S.Container>
      {isBreakpointSm ? (
        <Fragment>
          <Swiper
            modules={[Pagination]}
            spaceBetween={25}
            slidesPerView="auto"
            loop
            centeredSlides
            pagination
          >
            {quotes.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <QuotesCarouselCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
          {link && <Link {...link} />}
        </Fragment>
      ) : (
        <Fragment>
          <S.Quote>{`"${quotes[activeIndex].quote}"`}</S.Quote>
          <S.ImageLine>
            {quotes.map((testimonial, index) => (
              <S.ImageContainer key={index}>
                <Avatar
                  size={index === activeIndex ? activeAvatarSize : avatarSize}
                >
                  <Image {...testimonial.image} />
                </Avatar>
              </S.ImageContainer>
            ))}
            <S.Hr>
              <S.ArrowButton
                className={classNames("left-arrow-btn", {
                  "dark-mode": darkMode,
                })}
                onClick={() =>
                  setActiveIndex(
                    activeIndex === 0 ? quotes.length - 1 : activeIndex - 1
                  )
                }
              >
                <ArrowIcon />
              </S.ArrowButton>
              <Hr
                color={darkMode ? theme.palette.white : "rgba(0, 0, 0, 0.7)"}
              />
              <S.ArrowButton
                className={classNames("right-arrow-btn", {
                  "dark-mode": darkMode,
                })}
                onClick={() =>
                  setActiveIndex(
                    activeIndex === quotes.length - 1 ? 0 : activeIndex + 1
                  )
                }
              >
                <ArrowIcon />
              </S.ArrowButton>
            </S.Hr>
          </S.ImageLine>
          <S.Name>{`${quotes[activeIndex].fullName} - ${quotes[activeIndex].location}`}</S.Name>
          {link && <Link {...link} />}
        </Fragment>
      )}
    </S.Container>
  );
}
