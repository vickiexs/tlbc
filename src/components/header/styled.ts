import styled from "styled-components";

import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

import NavLink from "../../common/nav-link";

const DESKTOP_HEADER_HEIGHT = 100;
const MOBILE_HEADER_HEIGHT = 74;
const DESKTOP_MENU_HEIGHT = 90;
const MOBILE_MENU_HEIGHT = 300;

export const StyledHeader = styled(`header`).withConfig({
  shouldForwardProp: (props) =>
    props !== "visible" && props !== "isTransparent" && props !== "menuOpen",
})<{
  visible: boolean;
  isTransparent: boolean;
  menuOpen: boolean;
}>(({ theme, visible, isTransparent, menuOpen }) => {
  return {
    display: "flex",
    flexDirection: "column",
    padding: `${theme.spacing(3)} ${theme.spacing(10)}`,
    gap: theme.spacing(1),
    color:
      menuOpen || !isTransparent ? theme.palette.text : theme.palette.white,
    backgroundColor: "transparent",
    zIndex: 6,
    position: "fixed",
    left: 0,
    right: 0,
    height: `calc(${DESKTOP_HEADER_HEIGHT + DESKTOP_MENU_HEIGHT}px)`,
    clipPath: menuOpen ? "inset(0 0 0 0)" : "inset(0 0 calc(90px) 0)",
    transition: "all 0.5s ease-in-out",
    transform: visible
      ? "translateY(0)"
      : `translateY(calc(-${DESKTOP_HEADER_HEIGHT}px))`,

    ".hamburger-icon": {
      height: "28px",
      width: "28px",
    },

    svg: {
      fill:
        menuOpen || !isTransparent ? theme.palette.text : theme.palette.white,
    },

    [`@media ${theme.breakpoints.md}`]: {
      height: `calc(${MOBILE_HEADER_HEIGHT + MOBILE_MENU_HEIGHT}px)`,
      clipPath: menuOpen ? "inset(0 0 0 0)" : "inset(0 0 calc(300px) 0)",
      padding: `${theme.spacing(3)} ${theme.spacing(7)}`,
      transform: visible
        ? "translateY(0)"
        : `translateY(calc(-${MOBILE_HEADER_HEIGHT}px))`,
    },
  };
});

export const StyledHeaderBackground = styled("div").withConfig({
  shouldForwardProp: (props) =>
    props !== "visible" &&
    props !== "isTransparent" &&
    props !== "atTop" &&
    props !== "menuOpen",
})<{
  visible: boolean;
  isTransparent: boolean;
  atTop: boolean;
  menuOpen: boolean;
}>(({ theme, visible, isTransparent, menuOpen, atTop }) => ({
  height: DESKTOP_HEADER_HEIGHT,
  position: "fixed",
  top: 0,
  width: "100%",
  zIndex: 5,
  transition: "all 0.5s ease-in-out",
  transform: visible
    ? menuOpen
      ? "translateY(0) scaleY(1.9)"
      : "translateY(0) scaleY(1)"
    : `translateY(calc(-100px))`,
  transformOrigin: "top",
  backgroundColor:
    menuOpen || !isTransparent ? theme.palette.white : "transparent",
  boxShadow:
    (menuOpen || !isTransparent) && !atTop
      ? "2px 1px 7px 3px rgb(0 0 0 / 10%)"
      : "none",

  [`@media ${theme.breakpoints.md}`]: {
    height: MOBILE_HEADER_HEIGHT,
    overflow: "hidden",
    transform: visible
      ? menuOpen
        ? "translateY(0) scaleY(4)"
        : "translateY(0) scaleY(1)"
      : `translateY(calc(-100px))`,
  },
}));

export const StyledHeaderContainer = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "fit-content",
  width: "100%",
}));

export const StyledLogoContainer = styled(Link)(({ theme }) => ({
  display: "flex",
  svg: {
    height: "75px",
    width: "75px",
    fill: theme.palette.black,
  },

  [`@media ${theme.breakpoints.md}`]: {
    svg: {
      height: "50px",
      width: "50px",
    },
  },
}));

export const StyledNavLinks = styled(`nav`)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(6),

  a: {
    transition: "color 0s ease-in-out",
  },

  [`@media ${theme.breakpoints.md}`]: {
    display: "none",
  },
}));

export const StyledMenuIcon = styled(MdMenu)(({ theme }) => ({
  height: "40px",
  width: "40px",
  fill: theme.palette.text,
  transition: "all 0.5s ease-in-out",
  "&.light": {
    fill: theme.palette.white,
  },
}));

export const StyledCloseIcon = styled(MdClose)(({ theme }) => ({
  height: "40px",
  width: "40px",
  fill: theme.palette.text,
}));

export const StyledOverlay = styled(`div`)(() => ({
  position: "fixed",
  height: "100vh",
  width: "100%",
  top: 0,
  left: 0,
  backgroundColor: "rgba( 0, 0, 0, 0.6 )",
  transition: "all 0.5s ease-in-out",
  zIndex: 4,
  pointerEvents: "none",
  opacity: 0,
  "&.visible": {
    opacity: 1,
    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(2px)",
  },
}));

export const StyledDesktopMenu = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(7),

  ".hr": {
    opacity: 0.2,
    height: "1px",
    marginTop: theme.spacing(3),
    marginBottom: 0,
  },
}));

export const StyledMenuLinks = styled("nav")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  gap: theme.spacing(7),

  a: {
    transition: "color 0s ease-in-out",
  },
}));

export const StyledMobileMenu = styled("nav")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: theme.spacing(7),
}));

export const StyledMobileMenuItems = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: theme.spacing(12),
  color: theme.palette.text,
  gap: theme.spacing(5),

  "button, a": {
    fontSize: theme.fontSize(4.5),
  },
}));

export const StyledSubmenu = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  marginTop: theme.spacing(12),
  color: theme.palette.text,
  gap: theme.spacing(4),
}));

export const StyledNavDropdownItem = styled("button").withConfig({
  shouldForwardProp: (props) => props !== "active" && props !== "menuOpen",
})<{ active: boolean; menuOpen?: boolean }>(({ theme, active, menuOpen }) => ({
  border: "none",
  backgroundColor: "transparent",
  padding: 0,
  color: "inherit",
  WebkitTapHighlightColor: "transparent",
  fontFamily: "Titillium Web",
  fontSize: theme.fontSize(4),
  fontWeight: theme.fontWeight.semiBold,
  textAlign: "inherit",
  textTransform: "uppercase",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),

  svg: {
    height: "12px",
    transform: active ? "rotate(180deg)" : "rotate(0deg)",
    transition: "all 0.5s ease-in-out",
  },

  [`@media ${theme.breakpoints.md}`]: {
    opacity: menuOpen && !active ? 0.5 : 1,
    transition: "opacity 0.3s ease-in-out",
    gap: theme.spacing(2),
    svg: {
      transform: active ? "rotate(90deg)" : "rotate(-90deg)",
      fill: theme.palette.text,
    },
  },
}));

export const MobileNavLink = styled(NavLink)(() => ({
  textAlign: "right",
}));
