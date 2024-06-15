import styled from "styled-components";

export const StyledContainer = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(12),

  [`@media ${theme.breakpoints.md}`]: {
    gap: theme.spacing(8),
  },
}));

export const StyledHeading2 = styled(`h2`)(({ theme }) => ({
  fontSize: theme.fontSize(10),
  fontWeight: theme.fontWeight.semiBold,
  color: "inherit",
  textTransform: "uppercase",
  margin: 0,

  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(6),
  },
}));
