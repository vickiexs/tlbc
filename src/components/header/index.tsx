import { useState, useEffect, useRef, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery, useWindowSize } from "usehooks-ts";
import { animated, useSpring, useTransition } from "@react-spring/web";
import useDetectScroll from "@smakss/react-scroll-direction";
import { useTheme } from "styled-components";
import classNames from "classnames";

import Logo from "./logo";

import HamburgerIcon from "../../common/icons/hamburger-icon";
import NavLink from "../../common/nav-link";
import ArrowIcon from "../../common/icons/arrow";
import NavDropdownItem from "../nav-dropdown-item";
import IconButton from "../icon-button";

import { useOutsideClick } from "../../utils/handleOutsideClick";

import {
  StyledHeader,
  StyledHeaderContainer,
  StyledLogoContainer,
  StyledNavLinks,
  StyledMobileOverlay,
  StyledMobileMenu,
  StyledMobileMenuItems,
  StyledNavDropdownItem,
  StyledSubmenu,
} from "./styled";
import { HeaderProps } from "./type";
import { NavLinkProps as NavLinkType } from "../../common/nav-link/type";
import { NavDropdownItemProps as NavDropdownType } from "../nav-dropdown-item/type";

export default function Header({ navItems }: HeaderProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [selectedSubmenu, setSelectedSubmenu] = useState<
    NavDropdownType | undefined
  >(undefined);
  const [spotlightOffset, setSpotlightOffset] = useState(0);
  const [spotlight, setSpotlight] = useState<HTMLElement | null>();
  const [visible, setVisible] = useState(true);
  const { height } = useWindowSize();
  const { scrollDir, scrollPosition } = useDetectScroll();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.md);

  const isTransparentHeader =
    (spotlight && scrollPosition.top < spotlightOffset) ?? false;

  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflowY = "visible";
    setSpotlight(document.getElementById("spotlight"));
  }, [location.pathname]);

  useEffect(() => {
    if (spotlight) {
      setSpotlightOffset(spotlight.offsetHeight);
    }
  }, [height, spotlight]);

  useEffect(() => {
    if (scrollDir === "down") {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [scrollDir]);

  const isNavDropdownItem = (
    navItem: NavLinkType | NavDropdownType
  ): navItem is NavDropdownType => {
    return (navItem as NavDropdownType).dropdownItems !== null;
  };

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      const html = document.getElementsByTagName("html")[0];
      html.classList.remove("lock-scroll");
    } else {
      setMobileMenuOpen(true);
      const html = document.getElementsByTagName("html")[0];
      html.classList.add("lock-scroll");
    }
    setSubmenuOpen(false);
  };

  const toggleMenuItem = (navDropdownItem: NavDropdownType) => {
    if (submenuOpen) {
      setSubmenuOpen(false);
      setSelectedSubmenu(undefined);
    } else {
      setSubmenuOpen(true);
      setSelectedSubmenu(navDropdownItem);
    }
  };

  const hamburgerSpring = useSpring({
    delay: mobileMenuOpen ? 0 : 700,
    config: { duration: scrollPosition.top === 0 ? 0 : 700 },
  });

  const submenuItems = useMemo(
    () =>
      submenuOpen && selectedSubmenu?.dropdownItems
        ? selectedSubmenu.dropdownItems
        : [],
    [submenuOpen, selectedSubmenu]
  );

  const submenuTransitions = useTransition(submenuItems, {
    from: { opacity: 0, transform: "translateX(20px)" },
    enter: { opacity: 1, transform: "translateX(0px)" },
    leave: { opacity: 0, transform: "translateX(20px)" },
    trail: 100,
    keys: (item) => item.label,
  });

  const headerRef = useRef(null);
  useOutsideClick(headerRef, () => toggleMobileMenu());

  return (
    <>
      <StyledHeader
        className={classNames({
          solid: !isTransparentHeader,
          "no-box-shadow": scrollPosition.top === 0 || mobileMenuOpen,
        })}
        visible={visible}
        isMobile={isMobile}
        mobileMenuOpen={mobileMenuOpen}
        ref={headerRef}
      >
        <StyledHeaderContainer>
          <StyledLogoContainer to="/">
            <Logo />
          </StyledLogoContainer>
          <StyledNavLinks>
            {navItems.map((navItem, index) =>
              isNavDropdownItem(navItem) ? (
                <NavDropdownItem
                  {...navItem}
                  underlineColor={
                    isTransparentHeader
                      ? theme.palette.white
                      : theme.palette.text
                  }
                  closeMobileMenu={toggleMobileMenu}
                  key={index}
                />
              ) : (
                <NavLink
                  label={navItem.label}
                  link={navItem.link}
                  underlineColor={
                    isTransparentHeader
                      ? theme.palette.white
                      : theme.palette.text
                  }
                  closeMobileMenu={toggleMobileMenu}
                  key={index}
                />
              )
            )}
          </StyledNavLinks>
          {isMobile && (
            <animated.div
              style={{
                ...hamburgerSpring,
              }}
            >
              <IconButton onClick={toggleMobileMenu}>
                <HamburgerIcon
                  className="hamburger-icon"
                  isOpen={mobileMenuOpen}
                  dark={!isTransparentHeader}
                />
              </IconButton>
            </animated.div>
          )}
        </StyledHeaderContainer>
        {isMobile && (
          <StyledMobileMenu>
            <StyledMobileMenuItems>
              {navItems.map((navItem, index) =>
                isNavDropdownItem(navItem) ? (
                  <StyledNavDropdownItem
                    onClick={() => toggleMenuItem(navItem)}
                    open={submenuOpen}
                  >
                    {navItem.label} <ArrowIcon />
                  </StyledNavDropdownItem>
                ) : (
                  <NavLink
                    label={navItem.label}
                    link={navItem.link}
                    closeMobileMenu={toggleMobileMenu}
                    key={index}
                  />
                )
              )}
            </StyledMobileMenuItems>
            <StyledSubmenu>
              {submenuTransitions((styles, navItem) => (
                <animated.div key={navItem.label} style={styles}>
                  <NavLink
                    label={navItem.label}
                    link={navItem.link}
                    closeMobileMenu={toggleMobileMenu}
                  />
                </animated.div>
              ))}
            </StyledSubmenu>
          </StyledMobileMenu>
        )}
      </StyledHeader>
      <StyledMobileOverlay
        className={classNames({ visible: mobileMenuOpen })}
      />
    </>
  );
}
