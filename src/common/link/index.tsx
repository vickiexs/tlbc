import ArrowIcon from "../icons/arrow";

import * as S from "./styled";
import { LinkProps } from "./type";

export default function Link({ label, link, underlineColour }: LinkProps) {
  return (
    <S.Link to={link} className="link" underlineColour={underlineColour}>
      {label}
      <ArrowIcon />
    </S.Link>
  );
}
