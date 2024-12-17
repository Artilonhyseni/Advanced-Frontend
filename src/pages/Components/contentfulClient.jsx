// src/contentfulClient.js
import { createClient } from "contentful";

const client = createClient({
  space: "ggwsstb619dq", // Dit Contentful Space ID
  accessToken: "PXtwFz4siz9H518CRMPM6eFH2Razugkvij_fkkA-6LI", // Dit Contentful Access Token
});

export default client;
