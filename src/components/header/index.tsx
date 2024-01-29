import NavLink from "../nav-link";
import NavDropdownItem from "../nav-dropdown-item";

import {
  StyledHeaderWrapper,
  StyledLogo,
  StyledNavLinks,
  StyledMenuIcon,
} from "./styled";
import { HeaderProps } from "./type";
import { NavLinkProps as NavLinkType } from "../nav-link/type";
import { NavDropdownItemProps as NavDropdownType } from "../nav-dropdown-item/type";

export default function Header({ navItems }: HeaderProps) {
  console.log("NAV ITEMS:", navItems);
  const isNavDropdownItem = (
    navItem: NavLinkType | NavDropdownType
  ): navItem is NavDropdownType => {
    return (navItem as NavDropdownType).dropdownItems !== null;
  };

  return (
    <StyledHeaderWrapper>
      <StyledLogo></StyledLogo>
      <StyledNavLinks>
        {navItems.map((navItem) =>
          isNavDropdownItem(navItem) ? (
            <NavDropdownItem {...navItem} />
          ) : (
            <NavLink label={navItem.label} link={navItem.link} />
          )
        )}
      </StyledNavLinks>
      <StyledMenuIcon />
    </StyledHeaderWrapper>
  );
}
