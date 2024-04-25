import Host from "./host";

import { StyledContainer, StyledHeading2 } from "./styled";
import { HostsProps } from "./type";

export default function Hosts({
  heading,
  hosts,
  expandButtonLabel,
}: HostsProps) {
  return (
    <StyledContainer>
      <StyledHeading2>{heading}</StyledHeading2>
      {hosts.map((host, index) => (
        <Host
          {...host}
          buttonLabel={expandButtonLabel}
          imageLeft={index % 2 === 0}
          key={index}
        />
      ))}
    </StyledContainer>
  );
}
