import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery, useWindowSize } from "usehooks-ts";
import { useWindowScroll } from "@uidotdev/usehooks";
import { useTheme } from "styled-components";
import classNames from "classnames";

import Logo from "./logo";

import NavLink from "../nav-link";
import NavDropdownItem from "../nav-dropdown-item";
import IconButton from "../icon-button";

import {
  StyledHeaderContainer,
  StyledLogoContainer,
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

export default function Header({ navItems }: HeaderProps) {
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [spotlightOffset, setSpotlightOffset] = useState(0);
  const [spotlight, setSpotlight] = useState<HTMLElement | null>();
  const { height } = useWindowSize();
  const [{ y }] = useWindowScroll();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.md);

  const isTransparentHeader = spotlight && (y as number) < spotlightOffset;

  useEffect(() => {
    setShowMobileMenu(false);
    document.body.style.overflowY = "visible";
    setSpotlight(document.getElementById("spotlight"));
  }, [location.pathname]);

  useEffect(() => {
    if (spotlight) {
      setSpotlightOffset(spotlight.offsetHeight);
    }
  }, [height, spotlight]);

  const openMobileMenu = () => {
    const html = document.getElementsByTagName("html")[0];
    html.classList.add("lock-scroll");

    setShowMobileMenu(true);
  };

  const closeMobileMenu = () => {
    const html = document.getElementsByTagName("html")[0];
    html.classList.remove("lock-scroll");

    setShowMobileMenu(false);
  };

  const isNavDropdownItem = (
    navItem: NavLinkType | NavDropdownType
  ): navItem is NavDropdownType => {
    return (navItem as NavDropdownType).dropdownItems !== null;
  };

  return (
    <StyledHeaderContainer
      className={classNames({
        solid: !isTransparentHeader,
        "no-box-shadow": y === 0,
      })}
    >
      <StyledLogoContainer to="/">
        <Logo />
      </StyledLogoContainer>
      <StyledNavLinks>
        {navItems.map((navItem, index) =>
          isNavDropdownItem(navItem) ? (
            <NavDropdownItem
              {...navItem}
              underlineColor={
                isTransparentHeader ? theme.palette.white : theme.palette.text
              }
              closeMobileMenu={closeMobileMenu}
              key={index}
            />
          ) : (
            <NavLink
              label={navItem.label}
              link={navItem.link}
              underlineColor={
                isTransparentHeader ? theme.palette.white : theme.palette.text
              }
              closeMobileMenu={closeMobileMenu}
              key={index}
            />
          )
        )}
      </StyledNavLinks>
      {isMobile && (
        <IconButton onClick={() => openMobileMenu()}>
          <StyledMenuIcon
            className={classNames({
              light: isTransparentHeader,
            })}
          />
        </IconButton>
      )}
      <StyledMobileMenu className={classNames({ visible: showMobileMenu })}>
        <IconButton onClick={() => closeMobileMenu()}>
          <StyledCloseIcon />
        </IconButton>
        <StyledMobileMenuItems>
          {navItems.map((navItem, index) =>
            isNavDropdownItem(navItem) ? (
              <NavDropdownItem
                {...navItem}
                underlineColor={
                  isTransparentHeader ? theme.palette.white : theme.palette.text
                }
                closeMobileMenu={closeMobileMenu}
                key={index}
              />
            ) : (
              <NavLink
                label={navItem.label}
                link={navItem.link}
                closeMobileMenu={closeMobileMenu}
                key={index}
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
