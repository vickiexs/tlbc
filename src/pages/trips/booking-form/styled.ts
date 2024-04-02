import styled from "styled-components";

export const StyledContainer = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(10),
  padding: `${theme.spacing(18)} ${theme.spacing(20)}`,

  ".booking-form-description": {
    textAlign: "center",
  },

  [`@media ${theme.breakpoints.md}`]: {
    padding: `${theme.spacing(10)} ${theme.spacing(10)}`,
  },
  [`@media ${theme.breakpoints.sm}`]: {
    padding: `${theme.spacing(8)} ${theme.spacing(7)}`,
  },
}));

export const StyledHeading = styled(`h2`)(({ theme }) => ({
  fontSize: theme.fontSize(10),
  fontWeight: theme.fontWeight.regular,
  textAlign: "center",
  color: "inherit",
  margin: 0,

  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(8),
  },
  [`@media ${theme.breakpoints.xs}`]: {
    fontSize: theme.fontSize(7),
  },
}));
