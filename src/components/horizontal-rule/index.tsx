import { StyledHr } from "./styled";
import { HrProps } from "./type";

export default function Hr({ color }: HrProps) {
  return <StyledHr color={color} className="hr" />;
}
