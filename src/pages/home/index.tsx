import { GenericObject } from "../../App";
import Metadata from "../../components/metadata";
import Spotlight from "../../components/spotlight";
import { SpotlightProps } from "../../components/spotlight/type";

export default function Home(pageData: GenericObject) {
  const { metadata, sections } = pageData;

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
      <Metadata {...metadata} />
      {sections.map((section: GenericObject, index: number) =>
        renderPageSection(section, index)
      )}
    </>
  );
}
