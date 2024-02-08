const size = {
  xs: "390px", // for small screen mobile
  sm: "600px", // for mobile screen
  md: "900px", // for tablets
  lg: "1280px", // for laptops
  xl: "1512px", // for desktop / monitors
  xxl: "1920px", // for big screens
};

const theme = {
  spacing: (n: number) => `${n * 0.25}rem`,
  palette: {
    text: "#2B2B2B",
    white: "#ffffff",
  },
  fontWeight: {
    semiBold: 600,
    regular: 400,
    light: 300,
  },
  fontSize: (n: number) => `${n * 0.25}rem`,
  borderRadius: {
    small: "5px",
    medium: "10px",
    large: "15px",
    circle: "50%",
  },
  breakpoints: {
    xs: `(max-width: ${size.xs})`,
    sm: `(max-width: ${size.sm})`,
    md: `(max-width: ${size.md})`,
    lg: `(max-width: ${size.lg})`,
    xl: `(max-width: ${size.xl})`,
    xxl: `(max-width: ${size.xxl})`,
  },
};

export default theme;
