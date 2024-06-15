import Typography from "../typography";

import { StyledSection, StyledSectionContainer } from "./styled";
import { SectionProps } from "./type";

export default function Section({
  children,
  eyebrowHeading,
  heading,
  backgroundColor,
  textColor,
  hideOverflow,
  removeTopPadding = false,
}: SectionProps) {
  return (
    <StyledSection backgroundColor={backgroundColor} textColor={textColor}>
      <StyledSectionContainer
        style={{
          overflow: hideOverflow ? "hidden" : "auto",
          paddingTop: removeTopPadding ? 0 : "revert-layer",
        }}
      >
        {eyebrowHeading && (
          <Typography variation="h2">{eyebrowHeading}</Typography>
        )}
        {heading && <Typography variation="h3">{heading}</Typography>}
        {children}
      </StyledSectionContainer>
    </StyledSection>
  );
}
