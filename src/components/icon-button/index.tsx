import { StyledIconButton } from "./styled";
import { IconButtonProps } from "./type";

export default function IconButton({
  children,
  className,
  onClick,
}: IconButtonProps) {
  return (
    <StyledIconButton onClick={onClick} className={className}>
      {children}
    </StyledIconButton>
  );
}
