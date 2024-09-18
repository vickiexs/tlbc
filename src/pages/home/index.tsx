import { GenericObject } from "../../App";
import Spotlight from "../../components/spotlight";
import { SpotlightProps } from "../../components/spotlight/type";

export default function Home(pageData: GenericObject) {
  const { sections } = pageData;

  const renderPageSection = (section: GenericObject, index: number) => {
    switch (section._type) {
      case "spotlight":
        return <Spotlight {...(section as SpotlightProps)} key={index} />;
      default:
        return null;
    }
  };

  return (
    <>
      {sections.map((section: GenericObject, index: number) =>
        renderPageSection(section, index)
      )}
    </>
  );
}
