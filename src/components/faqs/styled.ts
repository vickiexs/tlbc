import styled from "styled-components";

export const StyledContainer = styled(`div`)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(10),
  marginTop: theme.spacing(5),
}));

export const StyledColumn = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(5),
  width: "100%",
}));
