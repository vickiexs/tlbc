import styled from "styled-components";

export const StyledCard = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100%",
  width: "50vw",
  maxWidth: "500px",
  padding: `${theme.spacing(5)} 0`,
  textAlign: "center",

  ".avatar": {
    marginBottom: theme.spacing(4),
  },
}));

export const StyledQuote = styled(`q`)(({ theme }) => ({
  fontWeight: theme.fontWeight.light,
  fontSize: theme.fontSize(4),
  fontStyle: "italic",
  marginTop: theme.spacing(7),
  marginBottom: theme.spacing(10),
}));

export const StyledGuestInfo = styled(`div`)(({ theme }) => ({
  alignItems: "center",
  fontWeight: theme.fontWeight.semiBold,
  textTransform: "uppercase",

  "&.location": {
    minHeight: "48px",
  },
}));
