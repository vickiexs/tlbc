import styled from "styled-components";

export const StyledFooterWrapper = styled(`footer`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginTop: "auto",
  padding: `${theme.spacing(8)} 0`,
  gap: theme.spacing(1),
  zIndex: 2,

  [`@media ${theme.breakpoints.md}`]: {
    padding: `${theme.spacing(6)} 0`,
  },
}));

export const StyledContact = styled(`div`)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(4),
  fontSize: theme.fontSize(6),
  fontWeight: theme.fontWeight.semiBold,
  textTransform: "uppercase",

  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(5),
    gap: theme.spacing(3),
  },
  [`@media ${theme.breakpoints.sm}`]: {
    fontSize: theme.fontSize(4),
    gap: theme.spacing(2),
  },
}));

export const StyledIconLinks = styled(`div`)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(3),

  [`@media ${theme.breakpoints.md}`]: {
    gap: theme.spacing(2),
  },
  [`@media ${theme.breakpoints.sm}`]: {
    gap: theme.spacing(2),
  },
}));

export const StyledCopyright = styled(`div`)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  fontSize: theme.fontSize(3),
  fontWeight: theme.fontWeight.semiBold,

  [`@media ${theme.breakpoints.md}`]: {
    fontSize: "0.625rem",
  },
  [`@media ${theme.breakpoints.sm}`]: {
    fontSize: theme.fontSize(2),
  },
}));
