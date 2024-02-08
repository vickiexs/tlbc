export const spotlightQuery = `
_type == "spotlight" => {
  _type,
  heading,
  subheadings[],
  darkText
}`;
