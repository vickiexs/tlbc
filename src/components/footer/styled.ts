import styled from "styled-components";

export const StyledFooterWrapper = styled(`footer`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginTop: "auto",
  padding: `${theme.spacing(8)} 0`,

  [`@media ${theme.breakpoints.sm}`]: {
    padding: `${theme.spacing(6)} 0`,
  },
}));

export const StyledContact = styled(`div`)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(2),
  fontSize: theme.fontSize(4),
  fontWeight: theme.fontWeight.semiBold,
  textTransform: "uppercase",
}));

export const StyledIconLinks = styled(`div`)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const StyledCopyright = styled(`div`)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  fontSize: "0.625rem",
  fontWeight: theme.fontWeight.semiBold,
}));
