import { useState, useEffect } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import client from "../../client";
import { homepageQuery } from "./query";
// import { HOMEPAGE_QUERY } from "../../utils/queries";
import { HomepageData } from "./type";

export default function Home() {
  const [data, setData] = useState() as [
    HomepageData,
    (data: HomepageData) => void
  ];

  useEffect(() => {
    client
      .fetch(homepageQuery)
      .then((data) => setData(data[0]))
      .catch(console.error);
  }, []);

  console.log("DATA:", data);

  return (
    <>
      {data && (
        <>
          <Header {...data.header} />
          <Footer {...data.footer} />
        </>
      )}
    </>
  );
}
