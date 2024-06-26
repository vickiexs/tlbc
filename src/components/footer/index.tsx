import IconLink from "../icon-link";

import {
  StyledFooterWrapper,
  StyledContact,
  StyledIconLinks,
  StyledCopyright,
} from "./styled";
import { FooterProps } from "./type";

export default function Footer({ contact, links, copyright }: FooterProps) {
  return (
    <StyledFooterWrapper>
      <StyledContact>
        {contact}
        <StyledIconLinks>
          {links.map((link, index) => (
            <IconLink {...link} target="_blank" key={index} />
          ))}
        </StyledIconLinks>
      </StyledContact>
      <StyledCopyright>
        &copy; {new Date().getFullYear()} {copyright}
      </StyledCopyright>
    </StyledFooterWrapper>
  );
}
