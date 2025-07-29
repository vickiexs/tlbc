import styled from "styled-components";

import Button from "../../../common/button";

export const ListingContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(10),
  marginBottom: theme.spacing(10),
}));

export const Listing = styled("div")(({ theme }) => ({
  margin: `0 auto`,
  marginBottom: theme.spacing(10),
  minWidth: theme.maxContentWidth,
  maxWidth: theme.maxContentWidthLg,

  display: "flex",
  gap: theme.spacing(10),

  [`@media ${theme.breakpoints.xxxl}`]: {
    padding: `0 ${theme.spacing(20)}`,
  },
  [`@media ${theme.breakpoints.xl}`]: {
    maxWidth: theme.maxContentWidth,
    minWidth: "unset",
    margin: 0,
  },
  [`@media ${theme.breakpoints.lg}`]: {
    padding: `0 ${theme.spacing(14)}`,
    gap: theme.spacing(7),
  },
  [`@media ${theme.breakpoints.md}`]: {
    padding: `0 ${theme.spacing(10)}`,
    marginBottom: theme.spacing(5),
  },
  [`@media ${theme.breakpoints.sm}`]: {
    padding: `0 ${theme.spacing(7)}`,
  },
}));

export const Column = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(8),
  flexBasis: "100%",

  [`@media ${theme.breakpoints.md}`]: {
    gap: theme.spacing(6),
  },
}));

export const LoadMoreButton = styled(Button)(() => ({
  alignSelf: "center",
}));
