import React, { useEffect, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT_DETAILS } from '../../../graphql/query/product.query';
import { ProductGrid } from './ProductList.style';
import { Flex, Button, useColorModeValue } from '@chakra-ui/react';
import { useSearch } from '../../../contexts/search/search.provider';
import { useHistory } from 'react-router-dom';
import { useLanguage } from '../../../contexts/language/language.provider';
import Product, { ProductProps } from '../../../components/Products';

const ProductList: React.FC = () => {
   const {
      state: { query, category },
   } = useSearch();

   const {
      state: { userLanguage },
   } = useLanguage();
   interface Props {
      value: string;
      category: string;
   }

   const history = useHistory<null | undefined | Props>();
   const targetRef = useRef<HTMLDivElement | null>(null);
   const { data, fetchMore } = useQuery(GET_PRODUCT_DETAILS, {
      variables: {
         limit: 20,
         offset: 0,
         text: history.location ? history?.location?.state?.value : '',
         category: history.location ? history?.location?.state?.category : '',
      },
   });

   useEffect(() => {
      const target = targetRef.current;
      if (
         history?.location.state &&
         (query.length > 0 || category !== undefined)
      ) {
         window.scrollTo({
            top: target!.offsetHeight,
            behavior: 'smooth',
         });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [query, category]);

   const scheme = 'green';
   const step2 = useColorModeValue('500', '700');
   const step3 = useColorModeValue('300', '500');

   const loadMore = () => {
      fetchMore({
         variables: {
            limit: 8,
            offset: Number(data.products.items.length),
         },
         updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
               return prev;
            }
            return {
               products: {
                  __typename: prev.products.__typename,
                  items: [
                     ...prev.products.items,
                     ...fetchMoreResult.products.items,
                  ],
                  hasMore: fetchMoreResult.products.hasMore,
               },
            };
         },
      });
   };
   return (
      <div ref={targetRef}>
         <ProductGrid>
            {data?.products?.items?.map(
               (items: ProductProps, index: number) => (
                  <Product
                     key={index}
                     userLanguage={userLanguage}
                     image={items.image}
                     price={items.price}
                     title={items.title}
                     description={items.description}
                     id={items.id}
                     unit={items.unit}
                  />
               )
            )}
         </ProductGrid>
         {data?.products?.hasMore && (
            <Flex pb="20px" justify="center">
               <Button
                  backgroundColor="white"
                  color="black.blackAlpha.200"
                  fontWeight="400"
                  fontSize="14px"
                  size={'md'}
                  rounded={'md'}
                  _focus={{
                     outline: 'none',
                  }}
                  fontFamily="Lato , sans-serif"
                  transition="background 0.8s"
                  backgroundPosition="center"
                  _hover={{
                     bgColor: `${scheme}.${step2}`,
                     bgGradient: `radial(circle, transparent 1%, ${scheme}.${step2} 1%)`,
                     bgPos: 'center',
                     color: 'white',
                     backgroundSize: '15000%',
                  }}
                  _active={{
                     bgColor: `${scheme}.${step3}`,
                     backgroundSize: '100%',
                     transition: 'background 0s',
                  }}
                  margin="0px"
                  border="0px"
                  flexShrink={0}
                  cursor="pointer"
                  outline="0px"
                  paddingLeft="30px"
                  paddingRight="30px"
                  onClick={loadMore}
               >
                  Load More
               </Button>
            </Flex>
         )}
      </div>
   );
};

export default React.memo(ProductList);
