import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";
import { useTheme } from "styled-components";
import classNames from "classnames";

import NavLink from "../nav-link";
import NavDropdownItem from "../nav-dropdown-item";
import IconButton from "../icon-button";

import {
  StyledHeaderContainer,
  StyledLogo,
  StyledNavLinks,
  StyledMenuIcon,
  StyledCloseIcon,
  StyledMobileOverlay,
  StyledMobileMenu,
  StyledMobileMenuItems,
} from "./styled";
import { HeaderProps } from "./type";
import { NavLinkProps as NavLinkType } from "../nav-link/type";
import { NavDropdownItemProps as NavDropdownType } from "../nav-dropdown-item/type";

export default function Header({ navItems, variation = "white" }: HeaderProps) {
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.md);

  useEffect(() => {
    setShowMobileMenu(false);
  }, [location.pathname]);

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
      {isMobile && (
        <IconButton onClick={() => setShowMobileMenu(true)}>
          <StyledMenuIcon />
        </IconButton>
      )}
      <StyledMobileMenu className={classNames({ visible: showMobileMenu })}>
        <IconButton onClick={() => setShowMobileMenu(false)}>
          <StyledCloseIcon />
        </IconButton>
        <StyledMobileMenuItems>
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
        </StyledMobileMenuItems>
      </StyledMobileMenu>
      <StyledMobileOverlay
        className={classNames({ visible: showMobileMenu })}
      />
    </StyledHeaderContainer>
  );
}
