import classNames from "classnames";

import { StyledButton } from "./styled";
import { ButtonProps } from "./type";

export default function Button({
  className,
  label,
  variant = "dark",
  handleClick,
}: ButtonProps) {
  return (
    <StyledButton
      className={classNames(`btn-${variant}`, className)}
      onClick={handleClick}
    >
      {label}
    </StyledButton>
  );
}
