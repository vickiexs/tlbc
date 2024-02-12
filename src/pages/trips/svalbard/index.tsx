import { useTheme } from "styled-components";

import Section from "../../../components/section";
import Spotlight from "../../../components/spotlight";
import { SpotlightProps } from "../../../components/spotlight/type";
import TripIntroduction from "../../../components/trip-introduction";
import { TripIntroductionProps } from "../../../components/trip-introduction/type";
import TripLogistics from "../../../components/trip-logistics";
import { TripLogisticsProps } from "../../../components/trip-logistics/type";
import FAQs from "../../../components/faqs";
import { FAQProps } from "../../../components/faqs/type";
import { GenericObject } from "../../../App";

export default function Svalbard(pageData: GenericObject) {
  console.log("SVALBARD PAGE DATA:", pageData);
  const theme = useTheme();
  const { sections } = pageData;

  const renderPageSection = (section: GenericObject, index: number) => {
    switch (section._type) {
      case "spotlight":
        return <Spotlight {...(section as SpotlightProps)} key={index} />;
      case "tripIntroduction":
        return (
          <Section
            eyebrowHeading={section.eyebrowHeading}
            heading={section.heading}
            key={index}
          >
            <TripIntroduction {...(section as TripIntroductionProps)} />
          </Section>
        );
      case "tripLogistics":
        return (
          <Section
            eyebrowHeading={section.eyebrowHeading}
            heading={section.heading}
            key={index}
          >
            <TripLogistics {...(section as TripLogisticsProps)} />
          </Section>
        );
      case "faqs":
        return (
          <Section
            eyebrowHeading={section.eyebrowHeading}
            heading={section.heading}
            backgroundColor={theme.palette.text}
            textColor={theme.palette.white}
            key={index}
          >
            <FAQs {...(section as FAQProps)} />
          </Section>
        );
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
