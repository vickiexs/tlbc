import { useState } from "react";
import { useTheme } from "styled-components";
import { useMediaQuery } from "usehooks-ts";

import AccordionItem from "../accordion-item";

import { StyledContainer, StyledColumn } from "./styled";
import { FAQProps } from "./type";

export default function FAQs({ faqs }: FAQProps) {
  const [activeItem, setActiveItem] = useState(-1);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.md);

  const mid = faqs.length / 2;
  const end = isMobile ? faqs.length : mid;

  return (
    <StyledContainer>
      <StyledColumn>
        {faqs.slice(0, end).map((faq, index) => (
          <AccordionItem
            header={faq.question}
            content={faq.answer}
            index={index}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        ))}
      </StyledColumn>
      {!isMobile && (
        <StyledColumn>
          {faqs.slice(mid).map((faq, index) => (
            <AccordionItem
              header={faq.question}
              content={faq.answer}
              index={index + mid}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          ))}
        </StyledColumn>
      )}
    </StyledContainer>
  );
}
