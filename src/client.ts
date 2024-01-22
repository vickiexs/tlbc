import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "iarvujrb",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-01-16",
});

export default client;
