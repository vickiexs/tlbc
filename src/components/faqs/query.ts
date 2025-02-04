export const faqsQuery = `
_type == "faqs" => {
  _type,
  eyebrowHeading,
  heading,
  faqs[]->{
    question,
    answer[]
  },
  viewMoreLabel,
  viewLessLabel,
  displaySingleColumn
}`;
