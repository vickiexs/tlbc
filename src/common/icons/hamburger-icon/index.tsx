import { animated, useSpring } from "@react-spring/web";
import { useTheme } from "styled-components";

interface HamburgerIconProps extends React.HTMLAttributes<HTMLOrSVGElement> {
  isHovered?: boolean;
  isOpen?: boolean;
  dark?: boolean;
}

export const HamburgerIcon = ({
  isOpen = false,
  dark = false,
  ...rest
}: HamburgerIconProps) => {
  const theme = useTheme();
  const { d1, d2, d3 } = useSpring({
    d1: isOpen ? "M5.39343 5.3934L26.6066 26.6066" : "M1 6L31 6",
    d2: isOpen ? "M26.6066 5.3934L5.39343 26.6066" : "M1 16L31 16",
    d3: isOpen ? "M5.39343 26.6066L26.6066 5.3934" : "M1 26L31 26",
    config: { tension: 250, friction: 20, duration: 300 },
  });

  const strokeWidth = 2;

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <animated.path
        d={d1}
        stroke={dark || isOpen ? theme.palette.black : theme.palette.white}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <animated.path
        d={d2}
        stroke={dark || isOpen ? theme.palette.black : theme.palette.white}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <animated.path
        d={d3}
        stroke={dark || isOpen ? theme.palette.black : theme.palette.white}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HamburgerIcon;
