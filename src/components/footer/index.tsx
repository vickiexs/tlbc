import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";

import IconLink from "../../atoms/icon-link";

import {
  StyledFooterWrapper,
  StyledContact,
  StyledIconLinks,
  StyledCopyright,
} from "./styled";
import { FooterProps } from "./type";

export default function Footer({ contact, links, copyright }: FooterProps) {
  const theme = useTheme();

  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <StyledFooterWrapper isHomepage={isHomepage}>
      <StyledContact>
        {contact}
        <StyledIconLinks>
          {links.map((link, index) => (
            <IconLink
              {...link}
              color={isHomepage ? theme.palette.white : theme.palette.text}
              target="_blank"
              key={index}
            />
          ))}
        </StyledIconLinks>
      </StyledContact>
      <StyledCopyright>
        &copy; {new Date().getFullYear()} {copyright}
      </StyledCopyright>
    </StyledFooterWrapper>
  );
}
