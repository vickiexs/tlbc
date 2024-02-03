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
      <StyledDropdownMenu>
        {dropdownItems.map((item) => (
          <StyledDropdownLink
            to={item.link}
            className={classNames({ visible: showDropdownMenu })}
          >
            {item.label}
          </StyledDropdownLink>
        ))}
      </StyledDropdownMenu>
    </StyledNavDropdownItem>
  );
}
