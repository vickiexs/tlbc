import { useState, useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import client from "../../client";
import { articMemoriesPageQuery } from "./query";
import { ArcticMemoriesPageData } from "./type";

export default function ArcticMemories() {
  const [data, setData] = useState() as [
    ArcticMemoriesPageData,
    (data: ArcticMemoriesPageData) => void
  ];

  useEffect(() => {
    client
      .fetch(articMemoriesPageQuery)
      .then((data) => setData(data[0]))
      .catch(console.error);
  }, []);

  console.log("DATA:", data);

  return (
    <>
      {data && (
        <>
          <Header {...data.header} />
          ARCTIC MEMORIES
          <Footer {...data.footer} />
        </>
      )}
    </>
  );
}
