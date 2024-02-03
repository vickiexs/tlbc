import { StyledNavLink } from "./styled";
import { NavLinkProps } from "./type";

export default function NavLink({
  label,
  link,
  variation = "white",
}: NavLinkProps) {
  return (
    <StyledNavLink to={link} variation={variation}>
      {label}
    </StyledNavLink>
  );
}
