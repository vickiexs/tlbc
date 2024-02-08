import { useTheme } from "styled-components";

import Section from "../../../components/section";
import Spotlight from "../../../components/spotlight";
import { SpotlightProps } from "../../../components/spotlight/type";
import FAQs from "../../../components/faqs";
import { FAQProps } from "../../../components/faqs/type";
import { GenericObject } from "../../../App";

export default function Svalbard(pageData: GenericObject) {
  console.log("SVALBARD PAGE DATA:", pageData);
  const theme = useTheme();
  const { sections } = pageData;

  const renderPageSection = (section: GenericObject) => {
    switch (section._type) {
      case "spotlight":
        return <Spotlight {...(section as SpotlightProps)} />;
      case "faqs":
        return (
          <Section
            eyebrowHeading={section.eyebrowHeading}
            heading={section.heading}
            backgroundColor={theme.palette.text}
            textColor={theme.palette.white}
          >
            <FAQs {...(section as FAQProps)} />
          </Section>
        );
      default:
        return null;
    }
  };
  return (
    <>{sections.map((section: GenericObject) => renderPageSection(section))}</>
  );
}
