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
  closeMobileMenu,
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
          <StyledDropdownLink
            to={item.link}
            key={index}
            onClick={closeMobileMenu}
            className="nav-dropdown-link"
          >
            {item.label}
          </StyledDropdownLink>
        ))}
      </StyledDropdownMenu>
    </StyledNavDropdownItem>
  );
}
