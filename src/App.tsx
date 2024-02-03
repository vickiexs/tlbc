import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import theme from "./theme";
import { ThemeProvider } from "styled-components";
import client from "./client";
import { appQuery } from "./utils/queries";

import Home from "./pages/home";
import ArcticMemories from "./pages/arctic-memories";

import Header from "./components/header";
import { HeaderProps } from "./components/header/type";
import Footer from "./components/footer";
import { FooterProps } from "./components/footer/type";

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
              <Route path="/" element={<Home />} />
              <Route path="/arctic-memories" element={<ArcticMemories />} />
            </Routes>
            <Footer {...(data[1] as FooterProps)} />
          </>
        )}
      </ThemeProvider>
    </main>
  );
}

export default App;
