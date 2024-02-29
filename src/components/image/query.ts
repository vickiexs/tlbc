export const imageFragment = `
asset->{
  _id,
  metadata,
},
crop,
hotspot
`;

export const imageQuery = `
image {
  ${imageFragment}
}
`;
