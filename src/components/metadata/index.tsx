import { Helmet } from "react-helmet-async";

import { MetadataProps } from "./type";

export default function Metadata({ title }: MetadataProps) {
  return (
    <Helmet>
      <title>{`${title} | The Laid-Back Company`}</title>
    </Helmet>
  );
}
