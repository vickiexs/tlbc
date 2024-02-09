import ArrowIcon from "../icons/arrow";

import { StyledLink } from "./styled";
import { LinkProps } from "./type";

export default function Link({ label, link }: LinkProps) {
  return (
    <StyledLink to={link} className="link">
      {label}
      <ArrowIcon />
    </StyledLink>
  );
}
