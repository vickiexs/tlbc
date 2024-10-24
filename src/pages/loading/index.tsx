import Typewriter from "typewriter-effect";

import Logo from "../../components/header/logo";

import {
  StyledContainer,
  StyledContentWrapper,
  StyledContent,
  StyledLogoContainer,
  StyledHeading,
} from "./styled";

export default function LoadingPage() {
  return (
    <StyledContainer>
      <StyledContentWrapper>
        <StyledContent>
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
        </StyledContent>
      </StyledContentWrapper>
    </StyledContainer>
  );
}
