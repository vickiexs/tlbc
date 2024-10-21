import styled from "styled-components";

export const StyledIntroduction = styled(`div`)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(25),
  margin: `0 auto`,
  minWidth: theme.maxContentWidth,
  maxWidth: theme.maxContentWidthLg,

  "p strong": {
    fontWeight: theme.fontWeight.semiBold,
    textTransform: "uppercase",
  },

  [`@media ${theme.breakpoints.xxl}`]: {
    padding: `0 ${theme.spacing(20)}`,
  },
  [`@media ${theme.breakpoints.xl}`]: {
    maxWidth: theme.maxContentWidth,
    minWidth: "unset",
    margin: 0,
  },
  [`@media ${theme.breakpoints.lg}`]: {
    flexDirection: "column",
    gap: theme.spacing(10),
  },
  [`@media ${theme.breakpoints.md}`]: {
    padding: `0 ${theme.spacing(10)}`,
    gap: theme.spacing(8),
  },
  [`@media ${theme.breakpoints.sm}`]: {
    padding: `0 ${theme.spacing(7)}`,
  },
}));

export const StyledTextContainer = styled(`div`)(() => ({
  flex: 2,
  textAlign: "justify",
}));

export const StyledImageContainer = styled(`div`)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,

  img: {
    height: "auto",
    maxWidth: "500px",
  },
}));
