import { useState, useEffect, Fragment } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { HelmetProvider } from "react-helmet-async";
import theme from "./theme";
import { ThemeProvider } from "styled-components";
import client from "./client";
import { appQuery } from "./utils/queries";

import Home from "./pages/home";
import TripPage from "./pages/trips";
import ArcticMemories from "./pages/arctic-memories";
import Testimonials from "./pages/testimonials";
import About from "./pages/about";
import Error404 from "./pages/404";
import LoadingPage from "./pages/loading";

import Header from "./components/header";
import { HeaderProps } from "./components/header/type";
import Footer from "./components/footer";
import { FooterProps } from "./components/footer/type";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GenericObject = { [key: string]: any };
interface AppData {
  header: HeaderProps[];
  pages: GenericObject[];
  footer: FooterProps[];
}

function App() {
  const navigate = useNavigate();
  const [data, setData] = useState<AppData>();
  const [isLoading, setIsLoading] = useState(true);

  const transition = useTransition(isLoading, {
    from: { opacity: 1 },
    enter: { opacity: 1, scale: 0.1 },
    leave: { opacity: 0, scale: 1 },
    config: { duration: 700 },
  });

  useEffect(() => {
    const path = localStorage.getItem("path");
    if (path) {
      localStorage.removeItem("path");
      navigate(path.split(/\/(.*)/s)[1]);
    }

    setTimeout(function () {
      client
        .fetch(appQuery)
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch(console.error);
    }, 5000);
  }, []);

  const getPageComponent = (template: string, pageData: GenericObject) => {
    switch (template) {
      case "home":
        return <Home {...pageData} />;
      case "expedition":
        return <TripPage {...pageData} />;
      case "memories":
        return <ArcticMemories {...pageData} />;
      case "testimonials":
        return <Testimonials {...pageData} />;
      case "about":
        return <About {...pageData} />;
      case "error":
        return <Error404 {...pageData} />;
    }
  };

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        {transition((style, isLoading) =>
          isLoading ? (
            <animated.div style={style}>
              <LoadingPage />
            </animated.div>
          ) : null
        )}
        {data && (
          <Fragment>
            <div style={{ overflow: "hidden", position: "relative" }}>
              <Header {...(data.header[0] as HeaderProps)} />
              <Routes>
                {data.pages.map((page, index) => (
                  <Route
                    path={page.path}
                    element={getPageComponent(page.template, page)}
                    key={index}
                  />
                ))}
              </Routes>
              <Footer {...(data.footer[0] as FooterProps)} />
            </div>
          </Fragment>
        )}
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
