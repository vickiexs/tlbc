import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledNavLink = styled(Link)(
  ({ theme }) => ({
    display: 'inline-block',
    position: 'relative',
    color: theme.palette.text,
    fontWeight: 600,
    textDecoration: 'none',
    textTransform: 'uppercase',
    '&:before': {
      transition: '500ms',
      height: '2px',
      content: '""',
      position: 'absolute',
      backgroundColor: theme.palette.text,
      width: '0%',
      bottom: '-3px'
    },
    '&:hover:before': {
      width: '100%'
    }
  })
);