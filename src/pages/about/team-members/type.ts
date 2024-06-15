import { TeamMemberProps as TeamMember } from "./team-member/type";

export interface TeamMembersProps {
  heading: string;
  teamMembers: TeamMember[];
  expandButtonLabel: string;
}
