import classNames from "classnames";

import { PrimaryButton } from "./styled";
import { ButtonProps } from "./type";

export default function Button({
  className,
  label,
  variant = "primary",
  mode = "light",
  disabled = false,
  handleClick,
}: ButtonProps) {
  switch (variant) {
    default:
      return (
        <PrimaryButton
          className={classNames(variant, mode, className)}
          onClick={handleClick}
          disabled={disabled}
        >
          {label}
        </PrimaryButton>
      );
  }
}
