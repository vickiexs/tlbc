import { NavLinkProps as NavLink } from "../../common/nav-link/type";

export interface HeaderProps {
  navItems: (NavLink | NavDropdownItem)[];
}

export interface NavDropdownItem {
  label: string;
  dropdownItems: NavLink[];
  underlineColor?: string;
  closeMobileMenu: () => void;
}
