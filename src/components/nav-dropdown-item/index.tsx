import { useState } from "react";

import classNames from "classnames";

import {
  StyledNavDropdownItem,
  StyledLabel,
  StyledDropdownMenu,
  StyledDropdownLink,
} from "./styled";
import { NavDropdownItemProps } from "./type";

export default function NavDropdownItem({
  label,
  dropdownItems,
  variation = "white",
}: NavDropdownItemProps) {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  return (
    <StyledNavDropdownItem
      onClick={() => setShowDropdownMenu(!showDropdownMenu)}
    >
      <StyledLabel dropdownMenuOpen={showDropdownMenu} variation={variation}>
        {label}
      </StyledLabel>
      <StyledDropdownMenu className={classNames({ visible: showDropdownMenu })}>
        {dropdownItems.map((item, index) => (
          <StyledDropdownLink to={item.link} key={index}>
            {item.label}
          </StyledDropdownLink>
        ))}
      </StyledDropdownMenu>
    </StyledNavDropdownItem>
  );
}
