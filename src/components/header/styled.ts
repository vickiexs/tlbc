import styled from "styled-components";

import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

export const StyledHeader = styled(`header`).withConfig({
  shouldForwardProp: (props) =>
    props !== "visible" &&
    props !== "isTransparent" &&
    props !== "atTop" &&
    props !== "isMobile" &&
    props !== "menuOpen",
})<{
  visible: boolean;
  isTransparent: boolean;
  atTop: boolean;
  isMobile: boolean;
  menuOpen: boolean;
}>(({ theme, visible, isTransparent, atTop, isMobile, menuOpen }) => {
  const desktopHeight = 100;
  const mobileHeight = 74;
  const height = isMobile ? mobileHeight : desktopHeight;

  return {
    display: "flex",
    flexDirection: "column",
    padding: `${theme.spacing(3)} ${theme.spacing(10)}`,
    gap: theme.spacing(1),
    color:
      menuOpen || !isTransparent ? theme.palette.text : theme.palette.white,
    backgroundColor:
      menuOpen || !isTransparent ? theme.palette.white : "transparent",
    zIndex: 5,
    position: "fixed",
    left: 0,
    right: 0,
    height: menuOpen ? "190px" : height,
    overflow: "hidden",
    borderBottomLeftRadius: menuOpen ? "15px" : 0,
    borderBottomRightRadius: menuOpen ? "15px" : 0,
    boxShadow:
      (menuOpen || !isTransparent) && !atTop
        ? "2px 1px 7px 3px rgb(0 0 0 / 10%)"
        : "none",
    transition: "all 0.5s ease-in-out, color 0.2s ease-in-out",
    transform: visible
      ? "translateY(0)"
      : `translateY(calc(-${desktopHeight}px))`,

    ".hamburger-icon": {
      height: "28px",
      width: "28px",
    },

    svg: {
      fill:
        menuOpen || !isTransparent ? theme.palette.text : theme.palette.white,
    },

    [`@media ${theme.breakpoints.md}`]: {
      padding: `${theme.spacing(3)} ${theme.spacing(7)}`,
      height: menuOpen ? "300px" : height,
      transform: visible
        ? "translateY(0)"
        : `translateY(calc(-${mobileHeight}px))`,
    },
  };
});

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

export const StyledMobileOverlay = styled(`div`)(() => ({
  position: "fixed",
  height: "100vh",
  width: "100%",
  top: 0,
  left: 0,
  backgroundColor: "rgba( 0, 0, 0, 0 )",
  transition: "all 0.7s ease-in-out",
  zIndex: 4,
  pointerEvents: "none",
  "&.visible": {
    backgroundColor: "rgba( 0, 0, 0, 0.6 )",
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
    },
  },
}));
