import { PortableText, PortableTextComponents } from "@portabletext/react";
import classNames from "classnames";

import Typography from "../typography";
import ArrowIcon from "../../common/icons/arrow";

import * as S from "./styled";
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
    <S.AccordionContainer>
      <S.AccordionHeader
        onClick={handleHeaderClick}
        className={classNames({ open: index === activeItem })}
      >
        <S.AccordionHeaderLabel>
          {splitString(header, "first")}
        </S.AccordionHeaderLabel>
        <S.AccordionHeaderLastWord>
          <S.AccordionHeaderLabel>
            {splitString(header, "last")}
          </S.AccordionHeaderLabel>
          <ArrowIcon />
        </S.AccordionHeaderLastWord>
      </S.AccordionHeader>
      <S.AccordionContentWrapper
        className={classNames({ visible: index === activeItem })}
      >
        <S.AccordionContent>
          <Typography variation="body">
            <PortableText value={content} components={components} />
          </Typography>
        </S.AccordionContent>
      </S.AccordionContentWrapper>
    </S.AccordionContainer>
  );
}
