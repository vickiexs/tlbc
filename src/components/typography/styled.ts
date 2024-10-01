import styled from "styled-components";

export const StyledHeading1 = styled(`h1`)(({ theme }) => ({
  fontSize: theme.fontSize(16),
  fontWeight: theme.fontWeight.semiBold,
  color: "inherit",
  margin: "0 auto",
  paddingTop: theme.spacing(35),
  paddingBottom: theme.spacing(10),
  textTransform: "uppercase",
  minWidth: theme.maxContentWidth,
  maxWidth: theme.maxContentWidthLg,

  [`@media ${theme.breakpoints.xxl}`]: {
    paddingLeft: theme.spacing(20),
    paddingRight: theme.spacing(20),
  },
  [`@media ${theme.breakpoints.xl}`]: {
    maxWidth: theme.maxContentWidth,
    minWidth: "unset",
    margin: 0,
  },
  [`@media ${theme.breakpoints.lg}`]: {
    paddingBottom: theme.spacing(7),
  },
  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(9),
    paddingTop: theme.spacing(24),
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
  },
  [`@media ${theme.breakpoints.sm}`]: {
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7),
  },
}));

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
    marginTop: 0,
    marginBottom: theme.spacing(5),
  },
  "p:last-child": {
    marginBottom: 0,
  },
  ul: {
    marginTop: 0,
  },

  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(4),
  },
}));

export const StyledCaption = styled(`figcaption`)(({ theme }) => ({
  fontSize: theme.fontSize(4),
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
    fontSize: theme.fontSize(3),
  },
}));
