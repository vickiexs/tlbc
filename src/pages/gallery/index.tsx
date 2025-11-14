import { useEffect, useState } from "react";
import client from "../../client";
import { galleryAlbumsQuery } from "../../utils/queries";

import Metadata from "../../components/metadata";
import Typography from "../../components/typography";
import { GenericObject } from "../../App";

export default function Gallery(pageData: GenericObject) {
  const { metadata, heading } = pageData;

  const [albums, setAlbums] = useState();

  useEffect(() => {
    client
      .fetch(galleryAlbumsQuery)
      .then((fetchedData) => {
        setAlbums(fetchedData);
      })
      .catch(console.error);
  }, []);

  console.log("albums", albums);

  return (
    <>
      <Metadata {...metadata} />
      <Typography variation="h1">{heading}</Typography>
    </>
  );
}
