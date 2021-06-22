import { gql } from "@apollo/client";

export const GET_PRODUCT_DETAILS = gql`
  query {
    products(limit: 200) {
      items {
        title
        id
        type
        price
        image
        description
        gallery {
          url
        }
      }
    }
  }
`;
