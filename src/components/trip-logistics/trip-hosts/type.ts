import { LinkProps as Link } from "../../link/type";
import { ImageProps } from "../../image/type";

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
