import styled from "styled-components";

export const StyledHeadedContentBlock = styled(`div`)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));

export const StyledHeading = styled(`div`)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
}));
