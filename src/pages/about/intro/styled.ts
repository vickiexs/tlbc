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

  [`@media ${theme.breakpoints.xxxl}`]: {
    gap: theme.spacing(15),
    padding: `0 ${theme.spacing(20)}`,
  },
  [`@media ${theme.breakpoints.xl}`]: {
    gap: theme.spacing(10),
    maxWidth: theme.maxContentWidth,
    minWidth: "unset",
    margin: 0,
  },
  [`@media ${theme.breakpoints.lg}`]: {
    flexDirection: "column",
    padding: `0 ${theme.spacing(14)}`,
  },
  [`@media ${theme.breakpoints.md}`]: {
    padding: `0 ${theme.spacing(10)}`,
  },
  [`@media ${theme.breakpoints.sm}`]: {
    padding: `0 ${theme.spacing(7)}`,
  },
}));

export const StyledTextContainer = styled(`div`)(() => ({
  flex: 2,
  textAlign: "justify",
}));

export const StyledImageContainer = styled(`div`)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  marginTop: `-${theme.spacing(7)}`,
  flex: 1,

  img: {
    height: "auto",
    maxWidth: "500px",
  },
}));
