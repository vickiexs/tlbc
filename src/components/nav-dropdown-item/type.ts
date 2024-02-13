import { NavLinkProps as NavLink } from "../nav-link/type";

export interface NavDropdownItemProps {
  label: string;
  dropdownItems: NavLink[];
  underlineColor?: string;
  closeMobileMenu: () => void;
}
