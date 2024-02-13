import Typewriter from "typewriter-effect";

import Image from "../image";

import { urlFor } from "../../utils/getImageUrl";

import {
  StyledSpotlightContainer,
  StyledBackgroundImage,
  StyledImageOverlay,
  StyledTextContainer,
  StyledHeading,
  StyledSubtitle,
} from "./styled";
import { SpotlightProps } from "./type";

export default function Spotlight({
  heading,
  subheadings,
  image,
  darkText,
}: SpotlightProps) {
  return (
    <StyledSpotlightContainer id="spotlight">
      <StyledBackgroundImage>
        <StyledImageOverlay />
        <Image src={urlFor(image).url()} />
      </StyledBackgroundImage>
      <StyledTextContainer darkText={darkText}>
        <StyledHeading>{heading}</StyledHeading>
        <StyledSubtitle>
          <Typewriter
            options={{
              strings: subheadings,
              autoStart: true,
              loop: true,
            }}
          />
        </StyledSubtitle>
      </StyledTextContainer>
    </StyledSpotlightContainer>
  );
}
