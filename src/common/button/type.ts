export interface ButtonProps {
  className?: string;
  label: string;
  variant?: "primary" | "secondary";
  mode?: "dark" | "light";
  disabled?: boolean;
  handleClick: () => void;
}
