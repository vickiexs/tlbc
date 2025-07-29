import { useState, useRef } from "react";
import { useTheme } from "styled-components";
import { useMediaQuery } from "usehooks-ts";

import { PortableText } from "@portabletext/react";

import Typography from "../../../../components/typography";
import Image from "../../../../common/image";
import Button from "../../../../common/button";
import Modal from "../../../../components/modal";
import CloseButton from "../../../../components/modal/close-button";
import IconLink from "../../../../common/icon-link";
import Ellipsis from "../../../../common/ellipsis";

import { useOutsideClick } from "../../../../utils/handleOutsideClick";

import {
  StyledContainer,
  StyledName,
  StyledRole,
  StyledImageContainer,
  StyledInfoContainer,
  StyledModalContent,
  StyledModalImageContainer,
  StyledModalTextContainer,
  StyledBio,
} from "./styled";
import { TeamMemberProps } from "./type";

export default function TeamMember({
  name,
  role,
  instagram,
  image,
  bio,
  bioSummary,
  imageLeft,
  buttonLabel,
}: TeamMemberProps) {
  const theme = useTheme();
  const [displayModal, setDisplayModal] = useState<boolean>(false);

  const isBreakpointMd = useMediaQuery(theme.breakpoints.md);

  const openModal = () => {
    const html = document.getElementsByTagName("html")[0];
    html.classList.add("lock-scroll");

    setDisplayModal(true);
  };

  const closeModal = () => {
    const html = document.getElementsByTagName("html")[0];
    html.classList.remove("lock-scroll");

    setDisplayModal(false);
  };

  const modalRef = useRef(null);
  useOutsideClick(modalRef, closeModal);

  return (
    <StyledContainer>
      {imageLeft || isBreakpointMd ? (
        <>
          <StyledImageContainer>
            <Image {...image} />
          </StyledImageContainer>
          <StyledInfoContainer>
            <StyledName>
              {name}
              {instagram && (
                <IconLink link={instagram} icon="instagram" target="_blank" />
              )}
            </StyledName>
            <StyledRole>{role}</StyledRole>
            <StyledBio variation="body">{bioSummary}</StyledBio>
            <Ellipsis />
            <Button label={buttonLabel} handleClick={openModal} />
          </StyledInfoContainer>
        </>
      ) : (
        <>
          <StyledInfoContainer>
            <StyledName>
              {name}
              {instagram && (
                <IconLink link={instagram} icon="instagram" target="_blank" />
              )}
            </StyledName>
            <StyledRole>{role}</StyledRole>
            <StyledBio variation="body">{bioSummary}</StyledBio>
            <Ellipsis />
            <Button label={buttonLabel} handleClick={openModal} />
          </StyledInfoContainer>
          <StyledImageContainer>
            <Image {...image} />
          </StyledImageContainer>
        </>
      )}
      {displayModal && (
        <Modal borderRadius={10}>
          <StyledModalContent ref={modalRef}>
            <CloseButton handleClick={closeModal} />
            <StyledModalImageContainer>
              <Image {...image} />
            </StyledModalImageContainer>
            <StyledModalTextContainer>
              <StyledName>
                {name}
                {instagram && (
                  <IconLink link={instagram} icon="instagram" target="_blank" />
                )}
              </StyledName>
              <StyledRole>{role}</StyledRole>
              <Typography variation="body">
                <PortableText value={bio} />
              </Typography>
            </StyledModalTextContainer>
          </StyledModalContent>
        </Modal>
      )}
    </StyledContainer>
  );
}
