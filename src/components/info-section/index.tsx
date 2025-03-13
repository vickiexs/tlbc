import { PortableText } from "@portabletext/react";
import classNames from "classnames";

import Typography from "../typography";
import Image from "../../common/image";

import {
  StyledTripIntroduction,
  StyledTextContainer,
  StyledImageContainer,
  StyledImage,
  StyledCaption,
} from "./styled";
import { InfoSectionProps } from "./type";

export default function InfoSection({
  content,
  image,
  caption,
  darkMode,
  imageFirst,
}: InfoSectionProps) {
  return (
    <StyledTripIntroduction
      className={classNames("info-section", { "dark-mode": darkMode })}
    >
      {imageFirst ? (
        <>
          <StyledImageContainer>
            <StyledImage hasCaption={caption !== null ? true : false}>
              <Image {...image} caption={caption} />
            </StyledImage>
            {caption && <StyledCaption>{caption}</StyledCaption>}
          </StyledImageContainer>
          <StyledTextContainer>
            <Typography variation="body">
              <PortableText value={content} />
            </Typography>
          </StyledTextContainer>
        </>
      ) : (
        <>
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
        </>
      )}
    </StyledTripIntroduction>
  );
}
