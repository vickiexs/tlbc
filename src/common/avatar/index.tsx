import * as S from "./styled";
import { AvatarProps } from "./type";

export default function Avatar({ children, size }: AvatarProps) {
  return (
    <S.Avatar size={size} className="avatar">
      {children}
    </S.Avatar>
  );
}
