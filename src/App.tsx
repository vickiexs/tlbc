import { useState, useEffect, Fragment } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";

import theme from "./theme";

import client from "./client";
import { appQuery } from "./utils/queries";
import usePageTracking from "./utils/hooks/analyticsPageTracking";

import Home from "./pages/home";
import TripPage from "./pages/trips";
import ArcticMemories from "./pages/arctic-memories";
import Testimonials from "./pages/testimonials";
import About from "./pages/about";
import Error404 from "./pages/404";

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

  usePageTracking("G-QFB2QJ3G09");

  const hideLoadingScreen = () => {
    const loader = document.querySelector(".loader");
    const container = document.querySelector(".container");

    if (loader) loader.classList.add("loader--hide");
    if (container) container.classList.add("container--hide");

    const html = document.getElementsByTagName("html")[0];
    html.classList.remove("lock-scroll");
  };

  useEffect(() => {
    setTimeout(() => {
      hideLoadingScreen();
    }, 4000);
  }, []);

  useEffect(() => {
    const path = localStorage.getItem("path");
    if (path) {
      localStorage.removeItem("path");
      navigate(path.split(/\/(.*)/s)[1]);
    }

    client
      .fetch(appQuery)
      .then((fetchedData) => {
        setData(fetchedData);
      })
      .catch(console.error);
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
