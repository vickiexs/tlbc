import { StyledNavLink } from "./styled";
import { NavLinkProps } from "./type";

export default function NavLink({ label, link }: NavLinkProps) {
  return (
    <StyledNavLink to={link}>
      {label}
    </StyledNavLink>
  );
}
