import client from "../client";

export const fetchData = (): any => {
  client
    .fetch(
      `*[_type == "page"]{
        heading,
        footer->{
          copyright
        }
      }`
    )
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};
