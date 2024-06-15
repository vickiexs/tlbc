import Section from "../../components/section";
import Typography from "../../components/typography";
import AboutIntro from "./intro";
import { AboutIntroProps } from "./intro/type";
import TeamMembers from "./team-members";
import { TeamMembersProps } from "./team-members/type";
import { GenericObject } from "../../App";

export default function About(pageData: GenericObject) {
  const { heading, sections } = pageData;

  const sectionIndices = Object.fromEntries(
    sections.map((section: GenericObject) => [section._type, 0])
  );

  const updateSectionIndexCount = (sectionName: string) => {
    sectionIndices[sectionName]++;
  };

  const renderPageSection = (section: GenericObject, index: number) => {
    switch (section._type) {
      case "infoSection":
        return <AboutIntro {...(section as AboutIntroProps)} key={index} />;
      case "teamMemberSection":
        updateSectionIndexCount(section._type);
        return (
          <Section
            removeTopPadding={sectionIndices[section._type] !== 1}
            key={index}
          >
            <TeamMembers {...(section as TeamMembersProps)} />
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
