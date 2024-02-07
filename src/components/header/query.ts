export const headerQuery = `
*[_type in ["header"]]{
  navItems[]->{
    label,
    link,
    dropdownItems[]->{
      label,
      link
    }
  }
}`;
