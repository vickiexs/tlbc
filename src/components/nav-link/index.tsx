import { useLocation } from "react-router-dom";
import { StyledNavLink } from "./styled";
import { NavLinkProps } from "./type";

export default function NavLink({
  label,
  link,
  variation = "white",
  closeMobileMenu,
}: NavLinkProps) {
  const location = useLocation();
  return (
    <StyledNavLink
      to={link}
      variation={variation}
      isActive={location.pathname === link}
      onClick={closeMobileMenu}
    >
      {label}
    </StyledNavLink>
  );
}
