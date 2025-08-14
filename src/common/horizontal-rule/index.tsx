import * as S from "./styled";
import { HrProps } from "./type";

export default function Hr({ color }: HrProps) {
  return <S.Hr color={color} className="hr" />;
}
