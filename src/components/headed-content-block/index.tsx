import { useTheme } from "styled-components";
import { useMediaQuery } from "usehooks-ts";
import { PortableText } from "@portabletext/react";

import Typography from "../typography";
import Icon from "../../common/icons";

import * as S from "./styled";
import { HeadedContentBlockProps } from "./type";

export default function HeadedContentBlock({
  heading,
  icon,
  content,
}: HeadedContentBlockProps) {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.md);

  const getIconSize = () => {
    return isTablet ? 24 : 28;
  };

  return (
    <S.HeadedContentBlock>
      <S.Heading>
        {icon && <Icon icon={icon} size={getIconSize()} />}
        <Typography variation="h4">{heading}</Typography>
      </S.Heading>
      <Typography variation="body">
        <PortableText value={content} />
      </Typography>
    </S.HeadedContentBlock>
  );
}
