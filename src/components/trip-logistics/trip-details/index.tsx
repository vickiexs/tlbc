import { useTheme } from "styled-components";
import { useMediaQuery } from "usehooks-ts";
import { PortableText } from "@portabletext/react";

import HeadedContentBlock from "../../headed-content-block";
import Typography from "../../typography";

import * as S from "./styled";
import { TripDetailsProps } from "./type";

export default function TripDetails({
  tripDetails,
  bookCallInfo,
}: TripDetailsProps) {
  const theme = useTheme();

  const isBreakpointMd = useMediaQuery(theme.breakpoints.md);
  const isBreakpointSm = useMediaQuery(theme.breakpoints.sm);

  return (
    <S.TripDetailsContainer>
      {tripDetails.map((details, index) => {
        const { codename, dates, price, spaces, location } = details;
        return isBreakpointSm ? (
          <div key={index}>
            {codename && (
              <S.TripCodename variation="body">{`Code name: ${codename}`}</S.TripCodename>
            )}
            <S.TripDetails>
              <HeadedContentBlock {...dates} />
              <HeadedContentBlock {...price} />
              <HeadedContentBlock {...spaces} />
              <HeadedContentBlock {...location} />
            </S.TripDetails>
          </div>
        ) : (
          <S.DesktopDetailsContainer key={index}>
            {codename && (
              <S.TripCodename variation="body">{`Code name: ${codename}`}</S.TripCodename>
            )}
            <S.TripDetails>
              <S.Column className="left-col">
                <HeadedContentBlock {...dates} />
                <HeadedContentBlock {...spaces} />
              </S.Column>
              <S.Column className="right-col">
                <HeadedContentBlock {...price} />
                <HeadedContentBlock {...location} />
              </S.Column>
            </S.TripDetails>
          </S.DesktopDetailsContainer>
        );
      })}
      {!isBreakpointMd && (
        <Typography variation="body">
          <PortableText value={bookCallInfo} />
        </Typography>
      )}
    </S.TripDetailsContainer>
  );
}
