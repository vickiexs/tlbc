import { useTheme } from "styled-components";
import { useMediaQuery } from "usehooks-ts";
import { PortableText } from "@portabletext/react";

import HeadedContentBlock from "../../headed-content-block";
import Typography from "../../typography";

import {
  StyledTripDetailsContainer,
  StyledCodename,
  StyledDesktopDetailsContainer,
  StyledTripDetails,
  StyledColumn,
} from "./styled";
import { TripDetailsProps } from "./type";

export default function TripDetails({
  tripDetails,
  bookCallInfo,
}: TripDetailsProps) {
  const theme = useTheme();

  const isBreakpointMd = useMediaQuery(theme.breakpoints.md);
  const isBreakpointSm = useMediaQuery(theme.breakpoints.sm);

  return (
    <StyledTripDetailsContainer>
      {tripDetails.map((details) => {
        const { codename, dates, price, spaces, location } = details;
        return isBreakpointSm ? (
          <>
            {codename && (
              <StyledCodename variation="body">{`Code name: ${codename}`}</StyledCodename>
            )}
            <StyledTripDetails>
              <HeadedContentBlock {...dates} />
              <HeadedContentBlock {...price} />
              <HeadedContentBlock {...spaces} />
              <HeadedContentBlock {...location} />
            </StyledTripDetails>
          </>
        ) : (
          <StyledDesktopDetailsContainer>
            {codename && (
              <StyledCodename variation="body">{`Code name: ${codename}`}</StyledCodename>
            )}
            <StyledTripDetails>
              <StyledColumn className="left-col">
                <HeadedContentBlock {...dates} />
                <HeadedContentBlock {...spaces} />
              </StyledColumn>
              <StyledColumn className="right-col">
                <HeadedContentBlock {...price} />
                <HeadedContentBlock {...location} />
              </StyledColumn>
            </StyledTripDetails>
          </StyledDesktopDetailsContainer>
        );
      })}
      {!isBreakpointMd && (
        <Typography variation="body">
          <PortableText value={bookCallInfo} />
        </Typography>
      )}
    </StyledTripDetailsContainer>
  );
}
