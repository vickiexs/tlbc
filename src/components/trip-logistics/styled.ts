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
