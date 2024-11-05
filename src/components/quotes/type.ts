import { Quote } from "./quotes-mobile-card/type";
import { LinkProps as Link } from "../../atoms/link/type";

export interface QuotesProps {
  quotes: Quote[];
  link?: Link;
  darkMode?: boolean;
}
