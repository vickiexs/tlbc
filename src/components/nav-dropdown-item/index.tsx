import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";

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
  underlineColor,
  closeMobileMenu,
}: NavDropdownItemProps) {
  const location = useLocation();
  const theme = useTheme();
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  useEffect(() => {
    setShowDropdownMenu(false);
  }, [location.pathname]);

  return (
    <StyledNavDropdownItem
      onClick={() => setShowDropdownMenu(!showDropdownMenu)}
    >
      <StyledLabel
        dropdownMenuOpen={showDropdownMenu}
        underlineColor={underlineColor}
      >
        {label}
      </StyledLabel>
      <StyledDropdownMenu
        className={classNames({
          visible: showDropdownMenu,
          transparent: underlineColor === theme.palette.white,
        })}
      >
        {dropdownItems.map((item, index) => (
          <StyledDropdownLink
            to={item.link}
            key={index}
            onClick={closeMobileMenu}
            className={classNames("nav-dropdown-link", {
              dark: underlineColor === theme.palette.white,
            })}
          >
            {item.label}
          </StyledDropdownLink>
        ))}
      </StyledDropdownMenu>
    </StyledNavDropdownItem>
  );
}
