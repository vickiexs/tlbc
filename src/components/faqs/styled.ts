import styled from "styled-components";

import Button from "../../common/button";

export const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(5),
}));

export const Listing = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(10),
  marginTop: theme.spacing(5),
}));

export const Column = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  width: "100%",
}));

export const LoadMoreButton = styled(Button)(() => ({
  alignSelf: "center",
}));
