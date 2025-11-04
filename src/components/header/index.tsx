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
import Hr from "../../common/horizontal-rule";
import ArrowIcon from "../../common/icons/arrow";
import IconButton from "../icon-button";

import { useOutsideClick } from "../../utils/hooks/handleOutsideClick";

import * as S from "./styled";
import { HeaderProps, NavDropdownItem as NavDropdownType } from "./type";
import { NavLinkProps as NavLinkType } from "../../common/nav-link/type";

export default function Header({ navItems }: HeaderProps) {
  const location = useLocation();
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const atTop = useMemo(() => scrollPosition.top === 0, [scrollPosition]);

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

  const lockScroll = () => {
    const html = document.getElementsByTagName("html")[0];
    html.classList.add("lock-scroll");
  };

  const unlockScroll = () => {
    const html = document.getElementsByTagName("html")[0];
    html.classList.remove("lock-scroll");
  };

  const closeDesktopMenu = () => {
    setDesktopMenuOpen(false);
    setSelectedSubmenu(undefined);
    unlockScroll();
  };

  const closeMobileMenu = () => {
    setSubmenuOpen(false);
    setSelectedSubmenu(undefined);
    setMobileMenuOpen(false);
    unlockScroll();
  };

  const toggleDesktopMenu = (navDropdownItem: NavDropdownType) => {
    if (desktopMenuOpen) {
      closeDesktopMenu();
    } else {
      setDesktopMenuOpen(true);
      setSelectedSubmenu(navDropdownItem);
      lockScroll();
    }
  };

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      closeMobileMenu();
    } else {
      setMobileMenuOpen(true);
      lockScroll();
    }
  };

  const toggleMenuItem = (navDropdownItem: NavDropdownType) => {
    if (submenuOpen) {
      setSubmenuOpen(false);
      setSelectedSubmenu(undefined);
      if (selectedSubmenu?.label !== navDropdownItem.label) {
        setTimeout(() => {
          setSubmenuOpen(true);
          setSelectedSubmenu(navDropdownItem);
        }, 500);
      }
    } else {
      setSubmenuOpen(true);
      setSelectedSubmenu(navDropdownItem);
    }
  };

  const hamburgerSpring = useSpring({
    delay: mobileMenuOpen ? 0 : 700,
    config: { duration: scrollPosition.top === 0 ? 0 : 700 },
  });

  const submenuItems = selectedSubmenu?.dropdownItems ?? [];

  const submenuTransitions = useTransition(submenuOpen ? submenuItems : [], {
    from: { opacity: 0, transform: "translateX(-30px)" },
    enter: { opacity: 1, transform: "translateX(0px)" },
    leave: { opacity: 0, transform: "translateX(-30px)" },
    trail: 100,
    config: { duration: 300 },
    keys: (item) => item.label,
  });

  const headerRef = useRef(null);
  useOutsideClick(headerRef, () => isMobile && closeMobileMenu());

  return (
    <>
      <S.Header
        visible={visible}
        isTransparent={isTransparentHeader}
        menuOpen={desktopMenuOpen || mobileMenuOpen}
        ref={headerRef}
      >
        <S.HeaderContainer>
          <S.LogoContainer to="/">
            <Logo />
          </S.LogoContainer>
          <S.NavLinks>
            {navItems.map((navItem, index) =>
              isNavDropdownItem(navItem) ? (
                <S.NavDropdownItem
                  onClick={() => toggleDesktopMenu(navItem)}
                  active={desktopMenuOpen}
                  key={index}
                >
                  {navItem.label} <ArrowIcon />
                </S.NavDropdownItem>
              ) : (
                <NavLink
                  label={navItem.label}
                  link={navItem.link}
                  underlineColor={
                    isTransparentHeader && !desktopMenuOpen
                      ? theme.palette.white
                      : theme.palette.text
                  }
                  closeMenu={closeDesktopMenu}
                  key={index}
                />
              )
            )}
          </S.NavLinks>
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
        </S.HeaderContainer>
        {!isMobile && (
          <S.DesktopMenu>
            <Hr />
            <S.MenuLinks>
              {selectedSubmenu?.dropdownItems.map((navItem, index) => (
                <NavLink
                  label={navItem.label}
                  link={navItem.link}
                  closeMenu={closeDesktopMenu}
                  key={index}
                />
              ))}
            </S.MenuLinks>
          </S.DesktopMenu>
        )}
        {isMobile && (
          <S.MobileMenu>
            <S.MobileMenuItems>
              {navItems.map((navItem, index) =>
                isNavDropdownItem(navItem) ? (
                  <S.NavDropdownItem
                    onClick={() => toggleMenuItem(navItem)}
                    active={
                      (selectedSubmenu &&
                        selectedSubmenu.label === navItem.label) as boolean
                    }
                    menuOpen={submenuOpen}
                    key={index}
                  >
                    {navItem.label} <ArrowIcon />
                  </S.NavDropdownItem>
                ) : (
                  <NavLink
                    className={classNames({
                      inactive: submenuOpen,
                    })}
                    label={navItem.label}
                    link={navItem.link}
                    closeMenu={closeMobileMenu}
                    key={index}
                  />
                )
              )}
            </S.MobileMenuItems>
            <S.Submenu>
              {submenuTransitions((styles, navItem) => (
                <animated.div key={navItem.label} style={styles}>
                  <S.MobileNavLink
                    label={navItem.label}
                    link={navItem.link}
                    closeMenu={closeMobileMenu}
                  />
                </animated.div>
              ))}
            </S.Submenu>
          </S.MobileMenu>
        )}
      </S.Header>
      <S.HeaderBackground
        visible={visible}
        menuOpen={desktopMenuOpen || mobileMenuOpen}
        isTransparent={isTransparentHeader}
        atTop={atTop}
      />
      <S.Overlay
        className={classNames({
          visible: desktopMenuOpen || mobileMenuOpen,
        })}
      />
    </>
  );
}
