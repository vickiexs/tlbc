import { StyledLayoutContainer } from "./styled";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FunctionComponent<LayoutProps> = (props) => (
  <StyledLayoutContainer>{props.children}</StyledLayoutContainer>
);
