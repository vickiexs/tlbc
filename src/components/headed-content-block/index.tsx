import { useTheme } from "styled-components";
import { useMediaQuery } from "usehooks-ts";
import { PortableText } from "@portabletext/react";

import Typography from "../typography";
import Icon from "../icons";

import { StyledHeadedContentBlock, StyledHeading } from "./styled";
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
    <StyledHeadedContentBlock>
      <StyledHeading>
        {icon && <Icon icon={icon} size={getIconSize()} />}
        <Typography variation="h4">{heading}</Typography>
      </StyledHeading>
      <Typography variation="body">
        <PortableText value={content} />
      </Typography>
    </StyledHeadedContentBlock>
  );
}
