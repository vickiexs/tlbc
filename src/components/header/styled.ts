import styled from "styled-components";

import { MdMenu } from "react-icons/md";

export const StyledHeaderWrapper = styled(`header`)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `${theme.spacing(4)} ${theme.spacing(8)}`,
  // gap: theme.spacing(1),

  [`@media ${theme.breakpoints.md}`]: {
    padding: `${theme.spacing(4)} ${theme.spacing(6)}`,
  },
}));

export const StyledLogo = styled(`div`)(({ theme }) => ({
  height: '80px',
  width: '80px',
  backgroundColor: 'gray',

  [`@media ${theme.breakpoints.md}`]: {
    height: '50px',
    width: '50px',
  },
}));

export const StyledNavLinks = styled(`nav`)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(6),

  [`@media ${theme.breakpoints.md}`]: {
    display: 'none'
  },
}));

export const StyledMenuIcon = styled(MdMenu)(({ theme }) => ({
  display: 'none',

  [`@media ${theme.breakpoints.md}`]: {
    display: 'inherit',
    height: '48px',
    width: '48px',
    fill: theme.palette.text
  },
}));