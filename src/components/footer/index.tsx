import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";

import IconLink from "../../common/icon-link";

import * as S from "./styled";
import { FooterProps } from "./type";

export default function Footer({ contact, links, copyright }: FooterProps) {
  const theme = useTheme();

  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <S.FooterWrapper isHomepage={isHomepage}>
      <S.Contact>
        {contact}
        <S.IconLinks>
          {links.map((link, index) => (
            <IconLink
              {...link}
              color={isHomepage ? theme.palette.white : theme.palette.text}
              target="_blank"
              key={index}
            />
          ))}
        </S.IconLinks>
      </S.Contact>
      <S.Copyright>
        &copy; {`2021 - ${new Date().getFullYear()}`} {copyright}
      </S.Copyright>
    </S.FooterWrapper>
  );
}
