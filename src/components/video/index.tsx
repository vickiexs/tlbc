import { useTheme } from "styled-components";
import { useMediaQuery } from "usehooks-ts";
import ReactPlayer from "react-player/vimeo";

import { StyledVideoContainer, StyledVideoWrapper } from "./styled";
import { VideoProps } from "./type";

export default function Video({ videoUrl }: VideoProps) {
  const theme = useTheme();
  const isBreakpointMd = useMediaQuery(theme.breakpoints.md);
  const isBreakpointXxl = useMediaQuery(theme.breakpoints.xxl);

  const getVideoWidth = () => {
    if (isBreakpointMd) {
      return "100vw";
    } else if (isBreakpointXxl) {
      return "70vw";
    } else {
      return "100%";
    }
  };

  return (
    <StyledVideoContainer>
      <StyledVideoWrapper>
        <ReactPlayer
          url={videoUrl}
          controls
          width={getVideoWidth()}
          height="auto"
          maxWidth="1500px"
          style={{ aspectRatio: "16/9" }}
          fullscreen={isBreakpointMd}
        />
      </StyledVideoWrapper>
    </StyledVideoContainer>
  );
}
