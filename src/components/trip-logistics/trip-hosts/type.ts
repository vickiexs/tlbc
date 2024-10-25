import { LinkProps as Link } from "../../../atoms/link/type";
import { ImageProps } from "../../../atoms/image/type";

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
