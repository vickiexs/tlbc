import { useTheme } from "styled-components";
import { useMediaQuery } from "usehooks-ts";

import Typography from "../../typography";
import Avatar from "../../../common/avatar";
import Link from "../../../common/link";
import Image from "../../../common/image";

import * as S from "./styled";
import { TripHostsProps } from "./type";

export default function TripHosts({
  hostsHeading,
  hosts,
  specialGuestsHeading,
  specialGuests,
  link,
}: TripHostsProps) {
  const theme = useTheme();

  const isBreakpointSm = useMediaQuery(theme.breakpoints.sm);

  const hostsAvatarSize = 110;
  const guestAvatarSize = 95;

  const mobileHostsAvatarSize = 95;
  const mobileGuestAvatarSize = 80;

  return (
    <S.Container>
      <Typography variation="h4">{hostsHeading}</Typography>
      <S.Hosts className="hosts">
        {hosts.map((host, index) => (
          <S.Host key={index}>
            <Avatar
              size={isBreakpointSm ? mobileHostsAvatarSize : hostsAvatarSize}
            >
              <Image {...host.image} />
            </Avatar>
            <Typography variation="body" className="host-name">
              {host.nickname}
            </Typography>
          </S.Host>
        ))}
      </S.Hosts>
      {specialGuests && (
        <>
          <Typography variation="h4" className="special-guests-heading">
            {specialGuestsHeading}
          </Typography>
          <S.Hosts>
            {specialGuests.map((guest, index) => (
              <S.Host key={index}>
                <Avatar
                  size={
                    isBreakpointSm ? mobileGuestAvatarSize : guestAvatarSize
                  }
                >
                  <Image {...guest.image} />
                </Avatar>
                <Typography variation="body" className="host-name">
                  {guest.nickname}
                </Typography>
              </S.Host>
            ))}
          </S.Hosts>
        </>
      )}
      <Link {...link}></Link>
    </S.Container>
  );
}
