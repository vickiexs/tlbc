import { NavLinkProps as NavLink } from "../nav-link/type";
import { NavDropdownItemProps as NavDropdownItem } from "../nav-dropdown-item/type";

export interface HeaderProps {
  navItems: (NavLink | NavDropdownItem)[];
}
