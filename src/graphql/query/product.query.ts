import { gql } from '@apollo/client';

export const GET_PRODUCT_DETAILS = gql`
   query getProducts(
      $limit: Int
      $offset: Int
      $category: String
      $text: String
   ) {
      products(
         limit: $limit
         offset: $offset
         category: $category
         text: $text
      ) {
         items {
            title
            id
            type
            price
            image
            unit
            description
            gallery {
               url
            }
         }
         hasMore
      }
   }
`;
