import ArrowIcon from "../icons/arrow";

import { StyledLink } from "./styled";
import { LinkProps } from "./type";

export default function Link({ label, link, underlineColour }: LinkProps) {
  return (
    <StyledLink to={link} className="link" underlineColour={underlineColour}>
      {label}
      <ArrowIcon />
    </StyledLink>
  );
}
