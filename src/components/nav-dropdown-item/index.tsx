import { StyledNavDropdownItem, StyledDropdownMenu } from "./styled";
import { NavDropdownItemProps } from "./type";

export default function NavDropdownItem({ label, dropdownItems }: NavDropdownItemProps) {
  return (
    <StyledNavDropdownItem>
      {label}
    </StyledNavDropdownItem>
  );
}
