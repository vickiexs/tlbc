import { StyledAvatar } from "./styled";
import { AvatarProps } from "./type";

export default function Avatar({ children, size }: AvatarProps) {
  return (
    <StyledAvatar size={size} className="avatar">
      {children}
    </StyledAvatar>
  );
}
