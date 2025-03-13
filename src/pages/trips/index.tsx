import { useTheme } from "styled-components";

import { GenericObject } from "../../App";
import Metadata from "../../components/metadata";
import Section from "../../components/section";
import Spotlight from "../../components/spotlight";
import { SpotlightProps } from "../../components/spotlight/type";
import InfoSection from "../../components/info-section";
import { InfoSectionProps } from "../../components/info-section/type";
import ScrollingImages from "../../components/scrolling-images";
import { ScrollingImagesProps } from "../../components/scrolling-images/type";
import Facilities from "./facilities";
import { FacilitiesProps } from "./facilities/type";
import TripLogistics from "../../components/trip-logistics";
import { TripLogisticsProps } from "../../components/trip-logistics/type";
import FAQs from "../../components/faqs";
import { FAQProps } from "../../components/faqs/type";
import Quotes from "../../components/quotes";
import { QuotesProps } from "../../components/quotes/type";
import BookingForm from "./booking-form";
import { BookingFormProps } from "./booking-form/type";
import Itinerary from "../../components/itinerary";
import { ItineraryProps } from "../../components/itinerary/type";
import Video from "../../components/video";
import { VideoProps } from "../../components/video/type";

export default function TripPage(pageData: GenericObject) {
  const theme = useTheme();
  const { metadata, sections } = pageData;

  const renderPageSection = (section: GenericObject, index: number) => {
    switch (section._type) {
      case "spotlight":
        return (
          <Spotlight {...(section as SpotlightProps)} fixedHeight key={index} />
        );
      case "infoSection":
        return (
          <Section
            eyebrowHeading={section.eyebrowHeading}
            heading={section.heading}
            backgroundColor={
              section.darkMode ? theme.palette.text : theme.palette.white
            }
            textColor={
              section.darkMode ? theme.palette.white : theme.palette.text
            }
            key={index}
          >
            <InfoSection {...(section as InfoSectionProps)} />
          </Section>
        );
      case "itinerary":
        return (
          <Section
            eyebrowHeading={section.eyebrowHeading}
            backgroundColor={theme.palette.text}
            textColor={theme.palette.white}
            hideOverflow
            key={index}
          >
            <Itinerary {...(section as ItineraryProps)} />
          </Section>
        );
      case "videoSection":
        return (
          <Section key={index} eyebrowHeading={section.eyebrowHeading}>
            <Video {...(section as VideoProps)} />
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
            hideOverflow
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
      case "quotes":
        return (
          <Section hideOverflow key={index}>
            <Quotes {...(section as QuotesProps)} />
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
      <Metadata {...metadata} />
      {sections.map((section: GenericObject, index: number) =>
        renderPageSection(section, index)
      )}
    </>
  );
}
