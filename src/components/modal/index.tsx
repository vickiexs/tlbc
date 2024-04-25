import { StyledBackgroundOverlay, StyledModalContainer } from "./styled";
import { ModalProps } from "./type";

export default function Modal({ children }: ModalProps) {
  return (
    <StyledBackgroundOverlay>
      <StyledModalContainer>{children}</StyledModalContainer>
    </StyledBackgroundOverlay>
  );
}
