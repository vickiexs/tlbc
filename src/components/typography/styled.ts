import styled from "styled-components";

export const StyledHeading2 = styled(`h2`)(({ theme }) => ({
  fontSize: theme.fontSize(5),
  fontWeight: theme.fontWeight.semiBold,
  color: "inherit",
  margin: 0,

  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(4),
  },
}));

export const StyledHeading3 = styled(`h3`)(({ theme }) => ({
  fontSize: theme.fontSize(10),
  fontWeight: theme.fontWeight.regular,
  color: "inherit",
  margin: 0,

  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(8),
  },
  [`@media ${theme.breakpoints.xs}`]: {
    fontSize: theme.fontSize(7),
  },
}));

export const StyledHeading4 = styled(`h4`)(({ theme }) => ({
  fontSize: theme.fontSize(7),
  fontWeight: theme.fontWeight.semiBold,
  textTransform: "uppercase",
  color: "inherit",
  margin: 0,

  [`@media ${theme.breakpoints.lg}`]: {
    fontSize: theme.fontSize(6),
  },
  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(5),
  },
}));

export const StyledBody = styled(`div`)(({ theme }) => ({
  fontSize: theme.fontSize(5),
  fontWeight: theme.fontWeight.light,
  color: "inherit",
  a: {
    color: "inherit",
    fontSize: "inherit",
  },
  p: {
    margin: 0,
  },
  ul: {
    marginTop: 0,
  },

  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(4),
  },
}));
