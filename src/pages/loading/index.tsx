import Typewriter from "typewriter-effect";

import Logo from "../../components/header/logo";

import {
  StyledContainer,
  StyledContentWrapper,
  StyledLogoContainer,
  StyledHeading,
} from "./styled";

export default function LoadingPage() {
  return (
    <StyledContainer>
      <StyledContentWrapper>
        <StyledLogoContainer>
          <Logo />
        </StyledLogoContainer>
        <StyledHeading>
          <Typewriter
            options={{
              strings: "LOADING YOUR ADVENTURE...",
              autoStart: true,
            }}
          />
        </StyledHeading>
      </StyledContentWrapper>
    </StyledContainer>
  );
}
