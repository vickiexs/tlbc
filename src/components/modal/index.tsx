import { StyledBackgroundOverlay, StyledModalContainer } from "./styled";
import { ModalProps } from "./type";

export default function Modal({ children, borderRadius }: ModalProps) {
  return (
    <StyledBackgroundOverlay>
      <StyledModalContainer
        className="modal-container"
        borderRadius={borderRadius}
      >
        {children}
      </StyledModalContainer>
    </StyledBackgroundOverlay>
  );
}
