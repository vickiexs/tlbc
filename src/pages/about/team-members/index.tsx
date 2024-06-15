import TeamMember from "./team-member";

import { StyledContainer, StyledHeading2 } from "./styled";
import { TeamMembersProps } from "./type";

export default function TeamMembers({
  heading,
  teamMembers,
  expandButtonLabel,
}: TeamMembersProps) {
  return (
    <StyledContainer>
      <StyledHeading2>{heading}</StyledHeading2>
      {teamMembers.map((teamMember, index) => (
        <TeamMember
          {...teamMember}
          buttonLabel={expandButtonLabel}
          imageLeft={index % 2 === 0}
          key={index}
        />
      ))}
    </StyledContainer>
  );
}
