import { StyledIconButton } from "./styled";
import { IconButtonProps } from "./type";

export default function IconButton({ children, onClick }: IconButtonProps) {
  return <StyledIconButton onClick={onClick}>{children}</StyledIconButton>;
}
