import {
  StyledSpotlightContainer,
  StyledTextWrapper,
  StyledTextContainer,
  StyledHeading,
} from "./styled";
import { SpotlightProps } from "./type";

export default function Spotlight({ heading }: SpotlightProps) {
  return (
    <StyledSpotlightContainer>
      <StyledTextWrapper>
        <StyledTextContainer>
          <StyledHeading>{heading}</StyledHeading>
        </StyledTextContainer>
      </StyledTextWrapper>
    </StyledSpotlightContainer>
  );
}
