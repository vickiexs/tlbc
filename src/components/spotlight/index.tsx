import Typewriter from "typewriter-effect";

import {
  StyledSpotlightContainer,
  StyledTextContainer,
  StyledHeading,
  StyledSubtitle,
} from "./styled";
import { SpotlightProps } from "./type";

export default function Spotlight({
  heading,
  subheadings,
  darkText,
}: SpotlightProps) {
  return (
    <StyledSpotlightContainer>
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
