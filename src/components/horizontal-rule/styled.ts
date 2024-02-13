import styled from "styled-components";

export const StyledHr = styled(`div`)<{ color: string | undefined }>(
  ({ theme, color }) => ({
    width: "100%",
    height: "2px",
    backgroundColor: color ? color : theme.palette.text,
    margin: `${theme.spacing(8)} 0`,
  })
);
