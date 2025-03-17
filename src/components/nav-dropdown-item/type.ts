import { NavLinkProps as NavLink } from "../../common/nav-link/type";

export interface NavDropdownItemProps {
  label: string;
  dropdownItems: NavLink[];
  underlineColor?: string;
  closeMobileMenu: () => void;
}
