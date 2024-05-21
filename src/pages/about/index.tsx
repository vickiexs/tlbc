import Section from "../../components/section";
import Typography from "../../components/typography";
import AboutIntro from "./intro";
import { AboutIntroProps } from "./intro/type";
import Hosts from "./hosts";
import { HostsProps } from "./hosts/type";
import { GenericObject } from "../../App";

export default function About(pageData: GenericObject) {
  const { heading, sections } = pageData;

  const renderPageSection = (section: GenericObject, index: number) => {
    switch (section._type) {
      case "infoSection":
        return <AboutIntro {...(section as AboutIntroProps)} key={index} />;
      case "hosts":
        return (
          <Section key={index}>
            <Hosts {...(section as HostsProps)} />
          </Section>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Typography variation="h1">{heading}</Typography>
      {sections.map((section: GenericObject, index: number) =>
        renderPageSection(section, index)
      )}
    </>
  );
}
