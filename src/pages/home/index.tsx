import { GenericObject } from "../../App";
import Metadata from "../../components/metadata";
import Spotlight from "../../components/spotlight";
import { SpotlightProps } from "../../components/spotlight/type";

import video from "../../assets/homepage-banner.mp4";
import videoWeb from "../../assets/homepage-banner.webm";

export default function Home(pageData: GenericObject) {
  const { metadata, sections } = pageData;

  const renderPageSection = (section: GenericObject) => {
    switch (section._type) {
      case "spotlight":
        return (
          <Spotlight
            {...(section as SpotlightProps)}
            video={video}
            videoWebOptimised={videoWeb}
            key={section._id}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Metadata {...metadata} />
      {sections.map((section: GenericObject) => renderPageSection(section))}
    </>
  );
}
