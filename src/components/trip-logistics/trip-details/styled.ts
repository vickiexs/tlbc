import styled from "styled-components";

import Typography from "../../typography";

export const TripDetailsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(11),
  maxWidth: "750px",
}));

export const TripCodename = styled(Typography)(({ theme }) => ({
  fontSize: theme.fontSize(5),
  fontWeight: theme.fontWeight.semiBold,
  textTransform: "uppercase",
  color: "inherit",
  margin: 0,

  [`@media ${theme.breakpoints.lg}`]: {
    fontSize: theme.fontSize(4.5),
  },
  [`@media ${theme.breakpoints.md}`]: {
    fontSize: theme.fontSize(3.5),
  },
  [`@media ${theme.breakpoints.sm}`]: {
    marginBottom: theme.spacing(4),
  },
}));

export const DesktopDetailsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  maxWidth: "750px",
}));

export const TripDetails = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(20),
  width: "100%",
  ".left-col": {
    width: "60%",
  },
  ".right-col": {
    width: "100%",
  },

  [`@media ${theme.breakpoints.md}`]: {
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

export const Column = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(10),

  [`@media ${theme.breakpoints.md}`]: {
    gap: theme.spacing(6),
  },
}));
