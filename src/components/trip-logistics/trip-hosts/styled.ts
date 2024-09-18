import styled from "styled-components";

export const StyledHostsContainer = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(6),
  alignItems: "center",
  minWidth: "350px",

  ".special-guests-heading": {
    fontSize: theme.fontSize(6),

    [`@media ${theme.breakpoints.md}`]: {
      fontSize: theme.fontSize(4.5),
    },
  },

  [`@media ${theme.breakpoints.lg}`]: {
    marginRight: 0,
  },
  [`@media ${theme.breakpoints.md}`]: {
    minWidth: "300px",
  },
}));

export const StyledHosts = styled(`div`)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(3),
  flexWrap: "wrap",
  justifyContent: "center",

  "&.hosts": {
    [`@media ${theme.breakpoints.md}`]: {
      gap: theme.spacing(7),
    },
  },

  [`@media ${theme.breakpoints.lg}`]: {
    gap: theme.spacing(2),
  },
}));

export const StyledHost = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(3),
  minWidth: "150px",
  marginBottom: theme.spacing(2),

  ".host-name": {
    textAlign: "center",
  },

  [`@media ${theme.breakpoints.sm}`]: {
    minWidth: "100px",
  },
}));
