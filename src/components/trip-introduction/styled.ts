import styled from "styled-components";

export const StyledTripIntroduction = styled(`div`)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(12),

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
  width: "60%",
  height: "inherit",

  [`@media ${theme.breakpoints.lg}`]: {
    width: "100%",
  },
}));
