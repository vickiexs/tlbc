import {
  StyledHeading2,
  StyledHeading3,
  StyledHeading4,
  StyledBody,
} from "./styled";
import { TypographyProps } from "./type";

export default function Typography({
  variation,
  children,
  className,
}: TypographyProps) {
  const renderTypography = () => {
    switch (variation) {
      case "h2":
        return (
          <StyledHeading2 className={className}>{children}</StyledHeading2>
        );
      case "h3":
        return (
          <StyledHeading3 className={className}>{children}</StyledHeading3>
        );
      case "h4":
        return (
          <StyledHeading4 className={className}>{children}</StyledHeading4>
        );
      case "body":
        return <StyledBody className={className}>{children}</StyledBody>;
    }
  };
  return <>{renderTypography()}</>;
}
