import Spotlight from "../../../components/spotlight";
import { GenericObject } from "../../../App";

export default function Svalbard(pageData: GenericObject) {
  console.log("SVALBARD PAGE DATA:", pageData);
  return <Spotlight heading="SVALDBARD 2024" />;
}
