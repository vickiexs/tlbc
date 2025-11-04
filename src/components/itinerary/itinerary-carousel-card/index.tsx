import { useTheme } from "styled-components";

import { PortableText } from "@portabletext/react";

import Typography from "../../typography";
import Hr from "../../../common/horizontal-rule";

import * as S from "./styled";
import { HeadedContentBlockProps } from "../../headed-content-block/type";

export default function ItineraryCarouselCard({
  heading,
  content,
}: HeadedContentBlockProps) {
  const theme = useTheme();
  return (
    <S.CarouselCard>
      <S.CardHeading>{heading}</S.CardHeading>
      <S.LineContainer>
        <S.TimelineBullet />
        <Hr color={theme.palette.white} />
      </S.LineContainer>
      <Typography variation="body">
        <PortableText value={content} />
      </Typography>
    </S.CarouselCard>
  );
}
