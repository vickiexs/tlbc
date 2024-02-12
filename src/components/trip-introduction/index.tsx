import { PortableText } from "@portabletext/react";

import Typography from "../typography";
import Image from "../image";

import { urlFor } from "../../utils/getImageUrl";

import {
  StyledTripIntroduction,
  StyledTextContainer,
  StyledImageContainer,
} from "./styled";
import { TripIntroductionProps } from "./type";

export default function TripIntroduction({
  content,
  image,
}: TripIntroductionProps) {
  return (
    <StyledTripIntroduction>
      <StyledTextContainer>
        <Typography variation="body">
          <PortableText value={content} />
        </Typography>
      </StyledTextContainer>
      <StyledImageContainer>
        <Image src={urlFor(image).url()} />
      </StyledImageContainer>
    </StyledTripIntroduction>
  );
}
