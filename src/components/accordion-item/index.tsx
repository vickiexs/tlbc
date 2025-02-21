import { PortableText, PortableTextComponents } from "@portabletext/react";
import classNames from "classnames";

import Typography from "../typography";
import ArrowIcon from "../../common/icons/arrow";

import {
  StyledAccordionContainer,
  StyledAccordionHeader,
  StyledAccordionHeaderLabel,
  StyledAccordionHeaderLastWord,
  StyledAccordionContentWrapper,
  StyledAccordionContent,
} from "./styled";
import { AccordionProps } from "./type";

export default function AccordionItem({
  header,
  content,
  index,
  activeItem,
  setActiveItem,
}: AccordionProps) {
  const handleHeaderClick = () => {
    if (activeItem === index) {
      setActiveItem(-1);
    } else {
      setActiveItem(index);
    }
  };

  const components: PortableTextComponents = {
    marks: {
      link: ({ value, children }) => {
        return (
          <a href={value?.href} target={"_blank"}>
            {children}
          </a>
        );
      },
    },
  };

  const splitString = (str: string, section: string) => {
    const splitString = str.split(" ");
    const lastWord = splitString[splitString.length - 1];
    return section === "first" ? str.replace(lastWord, "") : lastWord;
  };

  return (
    <StyledAccordionContainer>
      <StyledAccordionHeader
        onClick={handleHeaderClick}
        className={classNames({ open: index === activeItem })}
      >
        <StyledAccordionHeaderLabel>
          {splitString(header, "first")}
        </StyledAccordionHeaderLabel>
        <StyledAccordionHeaderLastWord>
          <StyledAccordionHeaderLabel>
            {splitString(header, "last")}
          </StyledAccordionHeaderLabel>
          <ArrowIcon />
        </StyledAccordionHeaderLastWord>
      </StyledAccordionHeader>
      <StyledAccordionContentWrapper
        className={classNames({ visible: index === activeItem })}
      >
        <StyledAccordionContent>
          <Typography variation="body">
            <PortableText value={content} components={components} />
          </Typography>
        </StyledAccordionContent>
      </StyledAccordionContentWrapper>
    </StyledAccordionContainer>
  );
}
