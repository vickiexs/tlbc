import { PortableText } from "@portabletext/react";
import classNames from "classnames";

import Typography from "../typography";
import Image from "../../common/image";

import * as S from "./styled";
import { InfoSectionProps } from "./type";

export default function InfoSection({
  content,
  image,
  caption,
  darkMode,
  imageFirst,
}: InfoSectionProps) {
  return (
    <S.TripIntroduction
      className={classNames("info-section", { "dark-mode": darkMode })}
    >
      {imageFirst ? (
        <>
          <S.ImageContainer>
            <S.Image hasCaption={caption !== null ? true : false}>
              <Image {...image} caption={caption} />
            </S.Image>
            {caption && <S.Caption>{caption}</S.Caption>}
          </S.ImageContainer>
          <S.TextContainer>
            <Typography variation="body">
              <PortableText value={content} />
            </Typography>
          </S.TextContainer>
        </>
      ) : (
        <>
          <S.TextContainer>
            <Typography variation="body">
              <PortableText value={content} />
            </Typography>
          </S.TextContainer>
          <S.ImageContainer>
            <S.Image hasCaption={caption !== null ? true : false}>
              <Image {...image} caption={caption} />
            </S.Image>
            {caption && <S.Caption>{caption}</S.Caption>}
          </S.ImageContainer>
        </>
      )}
    </S.TripIntroduction>
  );
}
