import styled from "styled-components";

export const Avatar = styled("div")<{ size: number }>(({ size }) => ({
  backgroundColor: "grey",
  height: `${size}px`,
  width: `${size}px`,
  borderRadius: "50%",
  overflow: "hidden",
  transition: "height 450ms ease-in-out, width 450ms ease-in-out",
}));
