import styled from "styled-components";

export const StyledTripLogistics = styled(`div`)(({ theme }) => ({
  marginTop: theme.spacing(6),
}));

export const StyledTripDetailsContainer = styled(`div`)(({ theme }) => ({
  display: "flex",
  marginBottom: theme.spacing(12),
  gap: theme.spacing(10),
  justifyContent: "space-between",

  [`@media ${theme.breakpoints.md}`]: {
    flexDirection: "column",
    gap: theme.spacing(13),
  },
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
    gap: theme.spacing(6),
    ".left-col": {
      width: "75%",
    },
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

export const StyledHostDetails = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(6),
  marginRight: "15%",
  alignItems: "center",

  [`@media ${theme.breakpoints.xl}`]: {
    marginRight: "10%",
  },
  [`@media ${theme.breakpoints.lg}`]: {
    marginRight: 0,
  },
}));

export const StyledHosts = styled(`div`)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(10),
}));

export const StyledHost = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),
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
