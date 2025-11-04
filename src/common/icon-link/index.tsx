import Icon from "../icons";

import * as S from "./styled";
import { IconLinkProps } from "./type";

export default function IconLink({
  icon,
  link,
  color,
  size,
  target = "_self",
}: IconLinkProps) {
  return (
    <S.IconLink href={link} color={color} target={target}>
      <Icon icon={icon} size={size} />
    </S.IconLink>
  );
}
