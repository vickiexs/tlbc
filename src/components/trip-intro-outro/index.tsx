import { PortableText } from "@portabletext/react";

import Typography from "../typography";
import Image from "../../atoms/image";

import {
  StyledTripIntroduction,
  StyledTextContainer,
  StyledImageContainer,
} from "./styled";
import { TripIntroOutroProps } from "./type";

export default function TripIntroOutro({
  content,
  image,
}: TripIntroOutroProps) {
  return (
    <StyledTripIntroduction className="trip-intro-outro">
      <StyledTextContainer>
        <Typography variation="body">
          <PortableText value={content} />
        </Typography>
      </StyledTextContainer>
      <StyledImageContainer>
        <Image {...image} />
      </StyledImageContainer>
    </StyledTripIntroduction>
  );
}
