import { useTheme } from "styled-components";
import { useMediaQuery } from "usehooks-ts";
import { PortableText } from "@portabletext/react";

import TripHosts from "./trip-hosts";
import HeadedContentBlock from "../headed-content-block";
import Typography from "../typography";
import Hr from "../horizontal-rule";

import {
  StyledTripLogistics,
  StyledTripDetailsContainer,
  StyledDesktopDetailsContainer,
  StyledTripDetails,
  StyledColumn,
  StyledTripCoverage,
} from "./styled";
import { TripLogisticsProps } from "./type";

export default function TripLogistics({
  dates,
  price,
  spaces,
  location,
  tripHosts,
  bookCallInfo,
  included,
  notIncluded,
}: TripLogisticsProps) {
  const theme = useTheme();

  const isBreakpointMd = useMediaQuery(theme.breakpoints.md);
  const isBreakpointSm = useMediaQuery(theme.breakpoints.sm);

  return (
    <StyledTripLogistics>
      <StyledTripDetailsContainer>
        {isBreakpointSm ? (
          <StyledTripDetails>
            <HeadedContentBlock {...dates} />
            <HeadedContentBlock {...price} />
            <HeadedContentBlock {...spaces} />
            <HeadedContentBlock {...location} />
          </StyledTripDetails>
        ) : (
          <StyledDesktopDetailsContainer>
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
            {!isBreakpointMd && (
              <Typography variation="body">
                <PortableText value={bookCallInfo} />
              </Typography>
            )}
          </StyledDesktopDetailsContainer>
        )}
        <TripHosts {...tripHosts} />
      </StyledTripDetailsContainer>
      {isBreakpointMd && (
        <Typography variation="body">
          <PortableText value={bookCallInfo} />
        </Typography>
      )}
      <Hr color={theme.palette.grey} />
      <StyledTripCoverage>
        <HeadedContentBlock {...included} />
        <HeadedContentBlock {...notIncluded} />
      </StyledTripCoverage>
    </StyledTripLogistics>
  );
}
