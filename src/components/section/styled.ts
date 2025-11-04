import styled from "styled-components";

export const Section = styled("div").withConfig({
  shouldForwardProp: (props) =>
    props !== "backgroundColor" && props !== "textColor",
})<{
  backgroundColor?: string;
  textColor?: string;
}>(({ theme, backgroundColor, textColor }) => ({
  width: "100%",
  backgroundColor: backgroundColor ? backgroundColor : theme.palette.white,
  color: textColor ? textColor : theme.palette.text,
  fill: textColor ? textColor : theme.palette.text,
}));

export const SectionContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(5),
  margin: `0 auto`,
  padding: `${theme.spacing(18)} 0`,
  minWidth: theme.maxContentWidth,
  maxWidth: theme.maxContentWidthLg,

  [`@media ${theme.breakpoints.xxxl}`]: {
    padding: theme.spacing(20),
  },
  [`@media ${theme.breakpoints.xl}`]: {
    maxWidth: theme.maxContentWidth,
    minWidth: "unset",
    margin: 0,
  },
  [`@media ${theme.breakpoints.lg}`]: {
    padding: theme.spacing(14),
  },
  [`@media ${theme.breakpoints.md}`]: {
    padding: theme.spacing(10),
  },
  [`@media ${theme.breakpoints.sm}`]: {
    padding: `${theme.spacing(10)} ${theme.spacing(7)}`,
  },
}));
