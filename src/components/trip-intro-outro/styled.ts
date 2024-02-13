import styled from "styled-components";

export const StyledTripIntroduction = styled(`div`)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(25),

  [`@media ${theme.breakpoints.lg}`]: {
    flexDirection: "column",
    gap: theme.spacing(10),
  },
  [`@media ${theme.breakpoints.md}`]: {
    flexDirection: "column",
    gap: theme.spacing(8),
  },
}));

export const StyledTextContainer = styled(`div`)(() => ({
  width: "100%",
}));

export const StyledImageContainer = styled(`div`)(({ theme }) => ({
  width: "100%",
  height: "inherit",

  [`@media ${theme.breakpoints.xl}`]: {
    width: "75%",
  },
  [`@media ${theme.breakpoints.lg}`]: {
    width: "100%",
  },
}));
