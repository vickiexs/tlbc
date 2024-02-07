import styled from "styled-components";

import { MdMenu, MdClose } from "react-icons/md";

export const StyledHeaderContainer = styled(`header`)<{ variation: string }>(
  ({ theme, variation }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: `${theme.spacing(4)} ${theme.spacing(8)}`,
    gap: theme.spacing(1),
    backgroundColor: variation === "white" ? theme.palette.white : "none",
    color: variation === "white" ? theme.palette.text : theme.palette.white,

    [`@media ${theme.breakpoints.md}`]: {
      padding: `${theme.spacing(4)} ${theme.spacing(6)}`,
    },
  })
);

export const StyledLogo = styled(`div`)(({ theme }) => ({
  height: "80px",
  width: "80px",
  backgroundColor: "black",

  [`@media ${theme.breakpoints.md}`]: {
    height: "50px",
    width: "50px",
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
  },
}));

export const StyledMobileMenu = styled(`div`)(({ theme }) => ({
  position: "fixed",
  height: "100%",
  width: "60%",
  top: 0,
  right: "-700px",
  zIndex: 10,
  backgroundColor: theme.palette.white,
  padding: theme.spacing(6),
  transition: "all 1s ease-in-out",
  "&.visible": {
    right: 0,
  },
  display: "none",

  [`@media ${theme.breakpoints.md}`]: {
    display: "block",
  },
  [`@media ${theme.breakpoints.sm}`]: {
    right: "-600px",
  },
  [`@media ${theme.breakpoints.sm}`]: {
    right: "-500px",
  },
}));

export const StyledMobileMenuItems = styled(`nav`)(({ theme }) => ({
  height: "60%",
  marginLeft: theme.spacing(10),
  marginTop: "50%",
  textAlign: "left",
  "a, button": {
    marginTop: theme.spacing(10),
  },

  [`@media ${theme.breakpoints.md}`]: {
    marginTop: "30%",
  },
  [`@media ${theme.breakpoints.sm}`]: {
    marginTop: "40%",
  },
  [`@media ${theme.breakpoints.xs}`]: {
    marginTop: "60%",
  },
}));
