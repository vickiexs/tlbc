import styled from "styled-components";

export const StyledIntroduction = styled(`div`)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(25),

  padding: `0 ${theme.spacing(20)}`,
  margin: `0 auto`,
  minWidth: theme.maxContentWidth,
  maxWidth: theme.maxContentWidthLg,

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
  flex: 3,
}));

export const StyledImageContainer = styled(`div`)(({ theme }) => ({
  flex: 1,
  height: "inherit",

  [`@media ${theme.breakpoints.xl}`]: {
    width: "75%",
  },
  [`@media ${theme.breakpoints.lg}`]: {
    width: "100%",
  },
}));
