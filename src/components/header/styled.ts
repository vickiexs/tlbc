import styled from "styled-components";

import { MdMenu } from "react-icons/md";

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
  display: "none",

  [`@media ${theme.breakpoints.md}`]: {
    display: "inherit",
    height: "40px",
    width: "40px",
    fill: theme.palette.text,
  },
}));
