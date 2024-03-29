import styled from "styled-components";

export const StyledContainer = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(10),
  marginTop: theme.spacing(8),
  [`@media ${theme.breakpoints.md}`]: {
    gap: theme.spacing(8),
  },
}));

export const StyledImageContainer = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  scrollBehavior: "smooth",
  ".img-row:nth-child(odd)": {
    marginLeft: `-${theme.spacing(15)}`,
  },
  ".img-row:nth-child(even)": {
    marginLeft: theme.spacing(75),
  },

  [`@media ${theme.breakpoints.md}`]: {
    gap: theme.spacing(2),
  },
  [`@media ${theme.breakpoints.sm}`]: {
    ".img-row:nth-child(odd)": {
      marginLeft: `-${theme.spacing(15)}`,
    },
    ".img-row:nth-child(even)": {
      marginLeft: theme.spacing(75),
    },
  },
}));

export const StyledRow = styled(`div`)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(4),
  flexWrap: "nowrap",
  overflow: "visible",
  [`@media ${theme.breakpoints.md}`]: {
    gap: theme.spacing(2),
  },
}));

export const StyledImage = styled(`div`).withConfig({
  shouldForwardProp: (props) => props !== "aspectRatio",
})<{ aspectRatio: number }>(({ theme, aspectRatio }) => ({
  height: "300px",
  width: "auto",
  aspectRatio: `${aspectRatio}`,
  flex: "0 0 auto",

  [`@media ${theme.breakpoints.md}`]: {
    height: "200px",
  },
  [`@media ${theme.breakpoints.sm}`]: {
    height: "150px",
  },
}));

export const StyledLinkContainer = styled(`div`)(() => ({
  display: "flex",
  justifyContent: "center",
}));
