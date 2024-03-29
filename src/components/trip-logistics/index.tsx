import { useTheme } from "styled-components";
import { PortableText } from "@portabletext/react";

import HeadedContentBlock from "../headed-content-block";
import Typography from "../typography";
import Avatar from "../avatar";
import Link from "../link";
import Hr from "../horizontal-rule";
import Image from "../image";

import {
  StyledTripLogistics,
  StyledTripDetailsContainer,
  StyledTripDetails,
  StyledColumn,
  StyledHostDetails,
  StyledHosts,
  StyledHost,
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

  const avatarSize = 130;

  return (
    <StyledTripLogistics>
      <StyledTripDetailsContainer>
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
        <StyledHostDetails>
          <Typography variation="h4">{tripHosts.heading}</Typography>
          <StyledHosts>
            {tripHosts.hosts.map((host, index) => (
              <StyledHost key={index}>
                <Avatar size={avatarSize}>
                  <Image {...host.image} />
                </Avatar>
                <Typography variation="body">{host.nickname}</Typography>
              </StyledHost>
            ))}
          </StyledHosts>
          <Link {...tripHosts.link}></Link>
        </StyledHostDetails>
      </StyledTripDetailsContainer>
      <Typography variation="body">
        <PortableText value={bookCallInfo} />
      </Typography>
      <Hr color={theme.palette.grey} />
      <StyledTripCoverage>
        <HeadedContentBlock {...included} />
        <HeadedContentBlock {...notIncluded} />
      </StyledTripCoverage>
    </StyledTripLogistics>
  );
}
