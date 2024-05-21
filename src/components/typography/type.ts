export interface TypographyProps {
  variation: TypographyVariations;
  children: React.ReactNode;
  className?: string;
}

export type TypographyVariations =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body"
  | "caption";
