import { PortableText } from "@portabletext/react";

import Typography from "../../../components/typography";
import Image from "../../../components/image";

import {
  StyledIntroduction,
  StyledTextContainer,
  StyledImageContainer,
} from "./styled";
import { AboutIntroProps } from "./type";

export default function AboutIntro({ content, image }: AboutIntroProps) {
  return (
    <StyledIntroduction>
      <StyledTextContainer>
        <Typography variation="body">
          <PortableText value={content} />
        </Typography>
      </StyledTextContainer>
      <StyledImageContainer>
        <Image {...image} />
      </StyledImageContainer>
    </StyledIntroduction>
  );
}
