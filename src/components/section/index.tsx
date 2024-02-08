import Typography from "../typography";

import { StyledSection } from "./styled";
import { SectionProps } from "./type";

export default function Section({
  children,
  eyebrowHeading,
  heading,
  backgroundColor,
  textColor,
}: SectionProps) {
  return (
    <StyledSection backgroundColor={backgroundColor} textColor={textColor}>
      {eyebrowHeading && (
        <Typography variation="h2">{eyebrowHeading}</Typography>
      )}
      {heading && <Typography variation="h3">{heading}</Typography>}
      {children}
    </StyledSection>
  );
}
