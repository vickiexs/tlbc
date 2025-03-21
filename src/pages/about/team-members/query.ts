import { imageQuery } from "../../../common/image/query";

export const teamMemberQuery = `
_type == "teamMemberSection" => {
  _type,
  heading,
  teamMembers[]->{
    name,
    role,
    instagram,
    ${imageQuery},
    bio[],
    bioSummary
  },
  expandButtonLabel
}`;
