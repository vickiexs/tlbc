import styled from "styled-components";

export const StyledSection = styled(`div`)<{
  backgroundColor?: string;
  textColor?: string;
}>(({ theme, backgroundColor, textColor }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(5),
  padding: `${theme.spacing(18)} ${theme.spacing(20)}`,
  margin: `0 auto`,
  minWidth: "1352px",
  backgroundColor: backgroundColor ? backgroundColor : theme.palette.white,
  color: textColor ? textColor : theme.palette.text,
  fill: textColor ? textColor : theme.palette.text,

  [`@media ${theme.breakpoints.xl}`]: {
    maxWidth: "1352px",
    minWidth: "unset",
    margin: 0,
  },
  [`@media ${theme.breakpoints.md}`]: {
    padding: `${theme.spacing(10)} ${theme.spacing(10)}`,
  },
  [`@media ${theme.breakpoints.sm}`]: {
    padding: `${theme.spacing(8)} ${theme.spacing(7)}`,
  },
}));
