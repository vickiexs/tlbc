import * as S from "./styled";
import { ModalProps } from "./type";

export default function Modal({ children, borderRadius }: ModalProps) {
  return (
    <S.BackgroundOverlay>
      <S.ModalContainer className="modal-container" borderRadius={borderRadius}>
        {children}
      </S.ModalContainer>
    </S.BackgroundOverlay>
  );
}
