import { useLocation } from "react-router-dom";
import * as S from "./styled";
import { NavLinkProps } from "./type";

export default function NavLink({
  className,
  label,
  link,
  underlineColor,
  closeMenu,
}: NavLinkProps) {
  const location = useLocation();
  return (
    <S.NavLink
      className={className ?? ""}
      to={link}
      underlineColor={underlineColor}
      isActive={location.pathname === link}
      onClick={closeMenu}
    >
      {label}
    </S.NavLink>
  );
}
