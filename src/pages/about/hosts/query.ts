import { imageQuery } from "../../../components/image/query";

export const hostsQuery = `
_type == "hosts" => {
  _type,
  heading,
  hosts[]->{
    name,
    role,
    instagram,
    ${imageQuery},
    bio[],
    bioSummary
  },
  expandButtonLabel
}`;
