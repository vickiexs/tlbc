import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import theme from "./theme";
import { ThemeProvider } from "styled-components";
import client from "./client";
import { appQuery } from "./utils/queries";

import Home from "./pages/home";
import Svalbard from "./pages/trips/svalbard";
import Greenland from "./pages/trips/greenland";
import ArcticMemories from "./pages/arctic-memories";
import Testimonials from "./pages/testimonials";
import About from "./pages/about";
import Error404 from "./pages/404";

import Header from "./components/header";
import { HeaderProps } from "./components/header/type";
import Footer from "./components/footer";
import { FooterProps } from "./components/footer/type";

import { PATHS } from "./utils/constants";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    client
      .fetch(appQuery)
      .then((data) => setData(data))
      .catch(console.error);
  }, []);

  console.log("APP DATA:", data);

  return (
    <main>
      <ThemeProvider theme={theme}>
        {data && (
          <>
            <Header {...(data[0] as HeaderProps)} />
            <Routes>
              <Route path={PATHS.HOME} element={<Home />} />
              <Route path={PATHS.SVALBARD} element={<Svalbard />} />
              <Route path={PATHS.GREENLAND} element={<Greenland />} />
              <Route
                path={PATHS.ARCTIC_MEMORIES}
                element={<ArcticMemories />}
              />
              <Route path={PATHS.TESTIMONIALS} element={<Testimonials />} />
              <Route path={PATHS.ABOUT} element={<About />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer {...(data[1] as FooterProps)} />
          </>
        )}
      </ThemeProvider>
    </main>
  );
}

export default App;
