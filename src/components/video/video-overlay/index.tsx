import { useRef } from "react";
import ReactPlayer from "react-player/vimeo";

import Modal from "../../modal";
import CloseButton from "../../modal/close-button";

import { useOutsideClick } from "../../../utils/hooks/handleOutsideClick";

import * as S from "./styled";
import { VideoOverlayProps } from "../type";

export default function VideoOverlay({
  videoUrl,
  open,
  handleClose,
}: VideoOverlayProps) {
  const player = useRef(null);

  const modalRef = useRef(null);
  useOutsideClick(modalRef, handleClose);

  return (
    <S.VideoOverlay>
      {open && (
        <Modal>
          <CloseButton handleClick={handleClose} />
          <S.ModalContent ref={modalRef}>
            <ReactPlayer
              id="video-player"
              ref={player}
              url={videoUrl}
              controls
              width="100%"
              height="100%"
              playsinline
              playing
              fullscreen={true}
              style={{
                backgroundColor: "transparent",
              }}
            />
          </S.ModalContent>
        </Modal>
      )}
    </S.VideoOverlay>
  );
}
