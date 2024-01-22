import styled from "styled-components";

export const StyledIconLink = styled(`a`)<{ color: string | undefined }>(
  ({ theme, color }) => ({
    display: "flex",
    color: color ? color : theme.palette.text,
  })
);
