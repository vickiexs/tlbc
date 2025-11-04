import styled from "styled-components";

import { SanityImage } from "sanity-image";

export const Image = styled(SanityImage)(() => ({
  height: "100%",
  width: "100%",
  objectFit: "cover",
}));
