import { useState } from "react";
import { useTheme } from "styled-components";
import { useMediaQuery } from "usehooks-ts";

import { PortableText } from "@portabletext/react";

import Typography from "../../../../components/typography";
import Image from "../../../../components/image";
import Button from "../../../../components/button";
import Modal from "../../../../components/modal";
import Icon from "../../../../components/icons";
import IconLink from "../../../../components/icon-link";

import {
  StyledContainer,
  StyledName,
  StyledRole,
  StyledImageContainer,
  StyledInfoContainer,
  StyledModalContent,
  StyledModalImageContainer,
  StyledModalTextContainer,
  StyledCloseButton,
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

  const isBreakpointXxl = useMediaQuery(theme.breakpoints.xxl);
  const isBreakpointXl = useMediaQuery(theme.breakpoints.xl);
  const isBreakpointLg = useMediaQuery(theme.breakpoints.lg);
  const isBreakpointMd = useMediaQuery(theme.breakpoints.md);
  const isBreakpointSm = useMediaQuery(theme.breakpoints.sm);

  const getMaxChars = () => {
    if (isBreakpointSm) {
      return 325;
    } else if (isBreakpointMd) {
      return 530;
    } else if (isBreakpointLg) {
      return 300;
    } else if (isBreakpointXl) {
      return 510;
    } else if (isBreakpointXxl) {
      return 850;
    } else {
      return 1310;
    }
  };

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

  return (
    <StyledContainer isLeftImage={imageLeft ?? false}>
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
            <Typography variation="body">{`"${bioSummary.slice(
              0,
              getMaxChars()
            )}..."`}</Typography>
            <Button
              label={buttonLabel}
              variant="dark"
              handleClick={openModal}
            />
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
            <Typography variation="body">{`"${bioSummary.slice(
              0,
              getMaxChars()
            )}..."`}</Typography>
            <Button
              label={buttonLabel}
              variant="dark"
              handleClick={openModal}
            />
          </StyledInfoContainer>
          <StyledImageContainer>
            <Image {...image} />
          </StyledImageContainer>
        </>
      )}
      {displayModal && (
        <Modal>
          <StyledModalContent>
            <StyledCloseButton onClick={closeModal}>
              <Icon icon="close" size={isBreakpointMd ? 24 : 32} />
            </StyledCloseButton>
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
