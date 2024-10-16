import styled from "styled-components";

import Typography from "../../typography";

export const StyledTripDetailsContainer = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(11),
  maxWidth: "750px",
}));

export const StyledCodename = styled(Typography)(({ theme }) => ({
  fontSize: theme.fontSize(5),
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

export const StyledDesktopDetailsContainer = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  maxWidth: "750px",
}));

export const StyledTripDetails = styled(`div`)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(10),
  width: "100%",
  ".left-col": {
    width: "60%",
  },
  ".right-col": {
    width: "100%",
  },

  [`@media ${theme.breakpoints.md}`]: {
    justifyContent: "center",
    ".left-col": {
      width: "unset",
    },
    ".right-col": {
      width: "unset",
    },
  },
  [`@media ${theme.breakpoints.sm}`]: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: theme.spacing(8),
  },
  [`@media ${theme.breakpoints.xs}`]: {
    gap: theme.spacing(5),
  },
}));

export const StyledColumn = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(10),

  [`@media ${theme.breakpoints.md}`]: {
    gap: theme.spacing(6),
  },
}));
