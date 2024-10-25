import Metadata from "../../components/metadata";
import Spotlight from "./spotlight";
import { SpotlightProps } from "./spotlight/type";

import { GenericObject } from "../../App";

export default function Error404(pageData: GenericObject) {
  const { metadata, sections } = pageData;

  return (
    <>
      <Metadata {...metadata} />
      <Spotlight {...(sections[0] as SpotlightProps)} />
    </>
  );
}
