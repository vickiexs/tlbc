import * as S from "./styled";
import { IconButtonProps } from "./type";

export default function IconButton({
  children,
  className,
  onClick,
}: IconButtonProps) {
  return (
    <S.IconButton onClick={onClick} className={className}>
      {children}
    </S.IconButton>
  );
}
