import { useTheme } from "styled-components";

import { PortableText } from "@portabletext/react";

import Typography from "../../typography";
import Hr from "../../../atoms/horizontal-rule";

import {
  StyledCarouselCard,
  StyledCardHeading,
  StyledLineContainer,
  StyledTimelineBullet,
} from "./styled";
import { HeadedContentBlockProps } from "../../headed-content-block/type";

export default function ItineraryCarouselCard({
  heading,
  content,
}: HeadedContentBlockProps) {
  const theme = useTheme();
  return (
    <StyledCarouselCard>
      <StyledCardHeading>{heading}</StyledCardHeading>
      <StyledLineContainer>
        <StyledTimelineBullet />
        <Hr color={theme.palette.white} />
      </StyledLineContainer>
      <Typography variation="body">
        <PortableText value={content} />
      </Typography>
    </StyledCarouselCard>
  );
}
