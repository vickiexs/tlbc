import { PortableText } from "@portabletext/react";

import Typography from "../typography";
import Image from "../../atoms/image";

import {
  StyledTripIntroduction,
  StyledTextContainer,
  StyledImageContainer,
  StyledImage,
  StyledCaption,
} from "./styled";
import { TripIntroOutroProps } from "./type";

export default function TripIntroOutro({
  content,
  image,
  caption,
}: TripIntroOutroProps) {
  return (
    <StyledTripIntroduction className="trip-intro-outro">
      <StyledTextContainer>
        <Typography variation="body">
          <PortableText value={content} />
        </Typography>
      </StyledTextContainer>
      <StyledImageContainer>
        <StyledImage hasCaption={caption !== null ? true : false}>
          <Image {...image} caption={caption} />
        </StyledImage>
        {caption && <StyledCaption>{caption}</StyledCaption>}
      </StyledImageContainer>
    </StyledTripIntroduction>
  );
}
