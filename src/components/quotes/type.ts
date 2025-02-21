import { Quote } from "./quotes-mobile-card/type";
import { LinkProps as Link } from "../../common/link/type";

export interface QuotesProps {
  quotes: Quote[];
  link?: Link;
  darkMode?: boolean;
}
