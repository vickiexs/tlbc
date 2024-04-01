import Spotlight from "./spotlight";
import { SpotlightProps } from "./spotlight/type";

import { GenericObject } from "../../App";

export default function Error404(pageData: GenericObject) {
  const { sections } = pageData;

  return <Spotlight {...(sections[0] as SpotlightProps)} />;
}
