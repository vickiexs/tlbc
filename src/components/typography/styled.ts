import styled from "styled-components";

export const Heading1 = styled("h1")(({ theme }) => ({
  fontFamily: "Mukta",
  fontSize: theme.fontSize(16),
  fontWeight: theme.fontWeight.regular,
  color: "inherit",
  margin: "0 auto",
  paddingTop: theme.spacing(35),
  paddingBottom: theme.spacing(10),
  textTransform: "uppercase",
  minWidth: theme.maxContentWidth,
  maxWidth: theme.maxContentWidthLg,

  [`@media ${theme.breakpoints.xxxl}`]: {
    paddingLeft: theme.spacing(20),
    paddingRight: theme.spacing(20),
  },
  [`@media ${theme.breakpoints.xl}`]: {
    maxWidth: theme.maxContentWidth,
    minWidth: "unset",
    margin: 0,
  },
  [`@media ${theme.breakpoints.lg}`]: {
    fontSize: theme.fontSize(14),
    paddingLeft: theme.spacing(14),
    paddingRight: theme.spacing(14),
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

export const Heading2 = styled("h2")(({ theme }) => ({
  fontSize: theme.fontSize(5),
  fontWeight: theme.fontWeight.semiBold,
  color: "inherit",
  margin: 0,

  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(4),
  },
}));

export const Heading3 = styled("h3")(({ theme }) => ({
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

export const Heading4 = styled("h4")(({ theme }) => ({
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

export const Body = styled("div")(({ theme }) => ({
  fontSize: theme.fontSize(5),
  fontWeight: theme.fontWeight.light,
  color: "inherit",
  a: {
    color: "inherit",
    fontSize: "inherit",
  },
  p: {
    marginTop: 0,
    marginBottom: "30px",
  },
  "p:last-child": {
    marginBottom: 0,
  },
  ul: {
    marginTop: 0,
  },
  strong: {
    fontWeight: theme.fontWeight.semiBold,
  },

  [`@media ${theme.breakpoints.lg}`]: {
    fontSize: "18px",
  },
  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(4),
  },
}));

export const Caption = styled("figcaption")(({ theme }) => ({
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
