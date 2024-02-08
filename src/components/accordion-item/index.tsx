import { PortableText, PortableTextComponents } from "@portabletext/react";
import classNames from "classnames";

import Typography from "../typography";
import ArrowIcon from "../icons/arrow";

import {
  StyledAccordionContainer,
  StyledAccordionHeader,
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

  return (
    <StyledAccordionContainer>
      <StyledAccordionHeader
        onClick={handleHeaderClick}
        className={classNames({ open: index === activeItem })}
      >
        {header}
        <ArrowIcon />
      </StyledAccordionHeader>
      <StyledAccordionContent
        className={classNames({ visible: index === activeItem })}
      >
        <Typography variation="body">
          {index === activeItem && (
            <PortableText value={content} components={components} />
          )}
        </Typography>
      </StyledAccordionContent>
    </StyledAccordionContainer>
  );
}
