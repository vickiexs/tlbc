import styled from "styled-components";

export const StyledContainer = styled(`div`)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(12),
}));

export const StyledColumn = styled(`div`)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(8),
  width: "100%",
}));