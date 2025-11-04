import * as S from "./styled";
import { TypographyProps } from "./type";

export default function Typography({
  variation,
  children,
  className,
}: TypographyProps) {
  const renderTypography = () => {
    switch (variation) {
      case "h1":
        return <S.Heading1 className={className}>{children}</S.Heading1>;
      case "h2":
        return <S.Heading2 className={className}>{children}</S.Heading2>;
      case "h3":
        return <S.Heading3 className={className}>{children}</S.Heading3>;
      case "h4":
        return <S.Heading4 className={className}>{children}</S.Heading4>;
      case "body":
        return <S.Body className={className}>{children}</S.Body>;
      case "caption":
        return <S.Caption className={className}>{children}</S.Caption>;
    }
  };
  return <>{renderTypography()}</>;
}
