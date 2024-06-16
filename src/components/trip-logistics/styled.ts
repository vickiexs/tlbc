import styled from "styled-components";

export const StyledTripLogistics = styled(`div`)(({ theme }) => ({
  marginTop: theme.spacing(6),
}));

export const StyledTripDetailsContainer = styled(`div`)(({ theme }) => ({
  display: "flex",
  marginBottom: theme.spacing(12),
  gap: theme.spacing(75),

  [`@media ${theme.breakpoints.xxl}`]: {
    gap: theme.spacing(45),
  },
  [`@media ${theme.breakpoints.xl}`]: {
    gap: theme.spacing(20),
  },
  [`@media ${theme.breakpoints.md}`]: {
    flexDirection: "column",
    gap: theme.spacing(13),
  },
}));

export const StyledDesktopDetailsContainer = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(15),
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

export const StyledTripCoverage = styled(`div`)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(10),
  li: {
    marginBottom: theme.spacing(2),
  },

  [`@media ${theme.breakpoints.md}`]: {
    flexDirection: "column",
    gap: theme.spacing(6),
  },
}));
