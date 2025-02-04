import { useState } from "react";
import { useTheme } from "styled-components";
import { useMediaQuery } from "usehooks-ts";

import AccordionItem from "../accordion-item";
import Button from "../../atoms/button";

import { StyledContainer, StyledListing, StyledColumn } from "./styled";
import { FAQProps } from "./type";

export default function FAQs({
  faqs,
  viewMoreLabel,
  viewLessLabel,
  displaySingleColumn,
}: FAQProps) {
  const [activeItem, setActiveItem] = useState(-1);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.md);
  const faqCount = faqs?.length ?? 0;
  const isSingleColumn = faqs && (isMobile || displaySingleColumn);

  const mid = Math.ceil(faqs ? faqCount / 2 : 0);
  const secondColumn = faqs ? faqs.slice(mid) : [];
  const [maxIndex, setMaxIndex] = useState(faqCount > 5 ? 5 : faqCount);

  const handleButtonClick = (prevState: number) => {
    if (isSingleColumn) {
      return maxIndex >= faqCount ? 5 : prevState + 5;
    } else {
      return maxIndex >= mid ? 5 : prevState + 5;
    }
  };

  const getRemainingItemCount = () => {
    if (isSingleColumn) {
      return faqCount - maxIndex;
    } else {
      return faqCount - maxIndex * 2;
    }
  };

  const getButtonLabel = () => {
    return (isSingleColumn && maxIndex >= faqCount) ||
      (!isSingleColumn && maxIndex >= mid)
      ? (viewLessLabel as string)
      : `${viewMoreLabel} (${getRemainingItemCount()})`;
  };

  return (
    <StyledContainer>
      <StyledListing>
        {faqs && (
          <StyledColumn>
            {faqs.slice(0, maxIndex).map((faq, index) => (
              <AccordionItem
                header={faq.question}
                content={faq.answer}
                index={index}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                key={index}
              />
            ))}
          </StyledColumn>
        )}
        {faqs && !isSingleColumn && (
          <StyledColumn>
            {secondColumn.slice(0, maxIndex).map((faq, index) => (
              <AccordionItem
                header={faq.question}
                content={faq.answer}
                index={index + mid + maxIndex}
                activeItem={activeItem}
                setActiveItem={setActiveItem}
                key={index}
              />
            ))}
          </StyledColumn>
        )}
      </StyledListing>
      {faqs && viewMoreLabel && viewLessLabel && (
        <Button
          label={getButtonLabel()}
          variant="light"
          handleClick={() =>
            setMaxIndex((prevState) => handleButtonClick(prevState))
          }
          className="load-more-button"
        />
      )}
    </StyledContainer>
  );
}
