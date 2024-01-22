import Icon from "../icons";

import { StyledIconLink } from "./styled";
import { IconLinkProps } from "./type";

export default function IconLink({ icon, link, color, size }: IconLinkProps) {
  return (
    <StyledIconLink href={link} color={color}>
      <Icon icon={icon} size={size} />
    </StyledIconLink>
  );
}
