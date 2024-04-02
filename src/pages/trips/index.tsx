import { useTheme } from "styled-components";

import Section from "../../components/section";
import Spotlight from "../../components/spotlight";
import { SpotlightProps } from "../../components/spotlight/type";
import TripIntroOutro from "../../components/trip-intro-outro";
import { TripIntroOutroProps } from "../../components/trip-intro-outro/type";
import ScrollingImages from "../../components/scrolling-images";
import { ScrollingImagesProps } from "../../components/scrolling-images/type";
import Facilities from "./facilities";
import { FacilitiesProps } from "./facilities/type";
import TripLogistics from "../../components/trip-logistics";
import { TripLogisticsProps } from "../../components/trip-logistics/type";
import FAQs from "../../components/faqs";
import { FAQProps } from "../../components/faqs/type";
import BookingForm from "./booking-form";
import { BookingFormProps } from "./booking-form/type";
import { GenericObject } from "../../App";

export default function TripPage(pageData: GenericObject) {
  const theme = useTheme();
  const { sections } = pageData;

  const renderPageSection = (section: GenericObject, index: number) => {
    switch (section._type) {
      case "spotlight":
        return <Spotlight {...(section as SpotlightProps)} key={index} />;
      case "tripIntroOutro":
        return (
          <Section
            eyebrowHeading={section.eyebrowHeading}
            heading={section.heading}
            key={index}
          >
            <TripIntroOutro {...(section as TripIntroOutroProps)} />
          </Section>
        );
      case "tripGallery":
        return (
          <Section
            eyebrowHeading={section.eyebrowHeading}
            heading={section.heading}
            hideOverflow
            key={index}
          >
            <ScrollingImages {...(section as ScrollingImagesProps)} />
          </Section>
        );
      case "facilities":
        return (
          <Section
            eyebrowHeading={section.eyebrowHeading}
            heading={section.heading}
            backgroundColor={theme.palette.secondary.light}
            key={index}
          >
            <Facilities {...(section as FacilitiesProps)} />
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
      case "bookingForm":
        return <BookingForm {...(section as BookingFormProps)} key={index} />;
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
