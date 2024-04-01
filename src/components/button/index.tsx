import { StyledButton } from "./styled";
import { ButtonProps } from "./type";

export default function Button({
  label,
  variant = "dark",
  handleClick,
}: ButtonProps) {
  return (
    <StyledButton className={`btn-${variant}`} onClick={handleClick}>
      {label}
    </StyledButton>
  );
}
