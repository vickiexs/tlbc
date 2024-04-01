import Typewriter from "typewriter-effect";

import LoadingLogo from "./logo";

import { StyledContainer, StyledLogoContainer, StyledHeading } from "./styled";

export default function LoadingPage() {
  return (
    <StyledContainer>
      <StyledLogoContainer>
        <LoadingLogo />
      </StyledLogoContainer>
      <StyledHeading>
        <Typewriter
          options={{
            strings: "LOADING...",
            autoStart: true,
          }}
        />
      </StyledHeading>
    </StyledContainer>
  );
}
