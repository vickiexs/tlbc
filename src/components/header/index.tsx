import NavLink from "../nav-link";
import NavDropdownItem from "../nav-dropdown-item";

import {
  StyledHeaderContainer,
  StyledLogo,
  StyledNavLinks,
  StyledMenuIcon,
} from "./styled";
import { HeaderProps } from "./type";
import { NavLinkProps as NavLinkType } from "../nav-link/type";
import { NavDropdownItemProps as NavDropdownType } from "../nav-dropdown-item/type";

export default function Header({ navItems, variation = "white" }: HeaderProps) {
  const isNavDropdownItem = (
    navItem: NavLinkType | NavDropdownType
  ): navItem is NavDropdownType => {
    return (navItem as NavDropdownType).dropdownItems !== null;
  };

  return (
    <StyledHeaderContainer variation={variation}>
      <StyledLogo></StyledLogo>
      <StyledNavLinks>
        {navItems.map((navItem) =>
          isNavDropdownItem(navItem) ? (
            <NavDropdownItem {...navItem} variation={variation} />
          ) : (
            <NavLink
              label={navItem.label}
              link={navItem.link}
              variation={variation}
            />
          )
        )}
      </StyledNavLinks>
      <StyledMenuIcon />
    </StyledHeaderContainer>
  );
}
