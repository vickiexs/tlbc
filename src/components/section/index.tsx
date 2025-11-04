import Typography from "../typography";

import * as S from "./styled";
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
    <S.Section backgroundColor={backgroundColor} textColor={textColor}>
      <S.SectionContainer
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
      </S.SectionContainer>
    </S.Section>
  );
}
