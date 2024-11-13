import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "styled-components";

import classNames from "classnames";

import { useOutsideClick } from "../../utils/handleOutsideClick";

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

  const menuRef = useRef(null);
  useOutsideClick(menuRef, () => setShowDropdownMenu(false));

  return (
    <div ref={menuRef}>
      <StyledNavDropdownItem
        onClick={() => setShowDropdownMenu(!showDropdownMenu)}
      >
        <StyledLabel
          dropdownMenuOpen={showDropdownMenu}
          underlineColor={underlineColor}
        >
          {label}
        </StyledLabel>
      </StyledNavDropdownItem>
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
            underlineColor={underlineColor}
          >
            {item.label}
          </StyledDropdownLink>
        ))}
      </StyledDropdownMenu>
    </div>
  );
}
