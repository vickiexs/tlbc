import styled from "styled-components";

import { Link } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

export const StyledHeaderContainer = styled(`header`).withConfig({
  shouldForwardProp: (props) => props !== "visible",
})<{
  visible: boolean;
}>(({ theme, visible }) => {
  const desktopHeight = 100;

  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing(3)} ${theme.spacing(10)}`,
    gap: theme.spacing(1),
    color: theme.palette.white,
    backgroundColor: "transparent",
    boxShadow: "none",
    zIndex: 10,
    position: "fixed",
    left: 0,
    right: 0,
    transition: "all 0.5s ease-in-out",
    transform: visible
      ? "translateY(0)"
      : `translateY(calc(-${desktopHeight}px))`,
    "&.solid": {
      backgroundColor: theme.palette.white,
      color: theme.palette.text,
      boxShadow: "2px 1px 7px 3px rgb(0 0 0 / 10%)",
    },
    "&.no-box-shadow": {
      boxShadow: "none",
    },

    [`@media ${theme.breakpoints.md}`]: {
      padding: `${theme.spacing(3)} ${theme.spacing(6)}`,
      transform: "none",
    },
  };
});

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
  height: "100%",
  width: "100%",
  top: 0,
  left: 0,
  backgroundColor: "rgba( 0, 0, 0, 0 )",
  transition: "all 1s ease-in-out",
  zIndex: 1,
  pointerEvents: "none",
  "&.visible": {
    backgroundColor: "rgba( 0, 0, 0, 0.6 )",
    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(2px)",
  },
}));

export const StyledMobileMenu = styled(`div`)(({ theme }) => ({
  position: "fixed",
  width: "60%",
  top: 0,
  bottom: 0,
  right: "-700px",
  zIndex: 10,
  backgroundColor: theme.palette.white,
  padding: theme.spacing(6),
  transition: "all 1s ease-in-out",
  "&.visible": {
    right: 0,
  },
  button: {
    alignSelf: "flex-start",
  },
  display: "none",

  [`@media ${theme.breakpoints.md}`]: {
    display: "flex",
    flexDirection: "column",
  },
  [`@media ${theme.breakpoints.sm}`]: {
    right: "-600px",
  },
  [`@media ${theme.breakpoints.sm}`]: {
    right: "-500px",
  },
}));

export const StyledMobileMenuItems = styled(`nav`)(({ theme }) => ({
  height: "100%",
  marginLeft: theme.spacing(10),
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginTop: "-50px",
  color: theme.palette.text,
  "a, button": {
    marginTop: theme.spacing(10),
  },
  ".nav-dropdown-link": {
    marginTop: theme.spacing(6),
    marginBottom: 0,
    color: theme.palette.primary.main,
  },
}));
