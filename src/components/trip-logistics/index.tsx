import { useTheme } from "styled-components";
import { useMediaQuery } from "usehooks-ts";
import { PortableText } from "@portabletext/react";

import TripHosts from "./trip-hosts";
import HeadedContentBlock from "../headed-content-block";
import Typography from "../typography";
import Hr from "../../common/horizontal-rule";
import TripDetails from "./trip-details";

import * as S from "./styled";
import { TripLogisticsProps } from "./type";

export default function TripLogistics({
  tripDetails,
  tripHosts,
  bookCallInfo,
  included,
  notIncluded,
}: TripLogisticsProps) {
  const theme = useTheme();

  const isBreakpointMd = useMediaQuery(theme.breakpoints.md);

  return (
    <S.TripLogistics>
      <S.TripDetailsContainer>
        <TripDetails tripDetails={tripDetails} bookCallInfo={bookCallInfo} />
        <TripHosts {...tripHosts} />
      </S.TripDetailsContainer>
      {isBreakpointMd && (
        <Typography variation="body">
          <PortableText value={bookCallInfo} />
        </Typography>
      )}
      <Hr color={theme.palette.grey} />
      <S.TripCoverage>
        <HeadedContentBlock {...included} />
        <HeadedContentBlock {...notIncluded} />
      </S.TripCoverage>
    </S.TripLogistics>
  );
}
