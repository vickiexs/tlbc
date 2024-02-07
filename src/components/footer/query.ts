export const footerQuery = `
*[_type in ["footer"]]{
  contact,
  links[]->{
    icon,
    link
  },
  copyright
}`;
