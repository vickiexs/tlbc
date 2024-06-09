import Icon from "../icons";

import { StyledIconLink } from "./styled";
import { IconLinkProps } from "./type";

export default function IconLink({
  icon,
  link,
  color,
  size,
  target = "_self",
}: IconLinkProps) {
  return (
    <StyledIconLink href={link} color={color} target={target}>
      <Icon icon={icon} size={size} />
    </StyledIconLink>
  );
}
