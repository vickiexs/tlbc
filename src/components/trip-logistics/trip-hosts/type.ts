import { LinkProps as Link } from "../../../common/link/type";
import { ImageProps } from "../../../common/image/type";

export interface TripHostsProps {
  hostsHeading: string;
  hosts: Host[];
  specialGuestsHeading?: string;
  specialGuests?: Host[];
  link: Link;
}

export interface Host {
  nickname: string;
  image: ImageProps;
}
