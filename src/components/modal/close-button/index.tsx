import { useTheme } from "styled-components";
import { useMediaQuery } from "@uidotdev/usehooks";

import Icon from "../../../atoms/icons";

import { StyledCloseButton } from "../styled";

interface CloseButtonProps {
  handleClick: () => void;
}

export default function CloseButton({ handleClick }: CloseButtonProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.md);

  return (
    <StyledCloseButton onClick={handleClick} className="close-button">
      <Icon icon="close" size={isMobile ? 24 : 32} />
    </StyledCloseButton>
  );
}
