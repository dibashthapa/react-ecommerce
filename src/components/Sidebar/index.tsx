import React, { ReactNode } from 'react';
import { Flex, Icon, FlexProps, chakra, useDisclosure } from '@chakra-ui/react';
import Sticky from 'react-stickynode';
import { Category, IconProps as Props } from '../../interfaces';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../graphql/query/category.query';
import { Dict } from '../../types';
import { useHistory } from 'react-router-dom';
import { SidebarWrapper } from './index.style';
import {
   Accessories,
   BathOil,
   BeautyHealth,
   Beverage,
   Breakfast,
   Cooking,
   Dairy,
   Deodorent,
   Eyes,
   Face,
   FacialCare,
   FruitsVegetable,
   HandBags,
   HomeCleaning,
   LaptopBags,
   Lips,
   MeatFish,
   OralCare,
   OuterWear,
   Pants,
   PetCare,
   Purse,
   ShavingNeeds,
   Shirts,
   ShoulderBags,
   Skirts,
   Snacks,
   Tops,
   Wallet,
   WomenDress,
} from './AllSvgIcon';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { useSearch } from '../../contexts/search/search.provider';

let iconTypes: Dict<React.FC<Props>> = {
   Accessories: Accessories,
   BathOil: BathOil,
   BeautyHealth: BeautyHealth,
   Beverage: Beverage,
   Breakfast: Breakfast,
   Cooking: Cooking,
   Dairy: Dairy,
   Deodorent: Deodorent,
   Eyes: Eyes,
   Face: Face,
   FacialCare: FacialCare,
   FruitsVegetable: FruitsVegetable,
   HandBags: HandBags,
   HomeCleaning: HomeCleaning,
   LaptopBags: LaptopBags,
   Lips: Lips,
   MeatFish: MeatFish,
   OralCare: OralCare,
   OuterWear: OuterWear,
   Pants: Pants,
   PetCare: PetCare,
   Purse: Purse,
   ShavingNeeds: ShavingNeeds,
   Shirts: Shirts,
   ShoulderBags: ShoulderBags,
   Skirts: Skirts,
   Snacks: Snacks,
   Tops: Tops,
   Wallet: Wallet,
   WomenDress: WomenDress,
};

interface subItemProps {
   id: number;
   slug: string;
   title?: string;
}

const SubItem: React.FC<{ subCategory: subItemProps[]; isOpen: boolean }> = ({
   subCategory,
   isOpen,
}) => {
   const history = useHistory();
   const { state, dispatch } = useSearch();
   const handlePushCategories = (slug: string) => {
      history.push({
         pathname: '/search',
         search: `category=${slug}`,
         state: { category: slug },
      });
      dispatch({
         type: 'UPDATE',
         payload: {
            ...state,
            category: slug,
         },
      });
   };
   return (
      <Flex direction="column" pl="40px" mx="2">
         {isOpen
            ? subCategory?.map(({ title, slug }) => (
                 <chakra.p
                    p={0}
                    m={2}
                    textTransform="capitalize"
                    color="gray.600"
                    _hover={{
                       color: 'rgb(0, 158, 127)',
                    }}
                    cursor="pointer"
                    onClick={() => handlePushCategories(slug)}
                    key={title}
                 >
                    {title}
                 </chakra.p>
              ))
            : null}
      </Flex>
   );
};

const NavItem: React.FC<{
   icon: React.FC<Props>;
   children: ReactNode;
   subCategory: [subItemProps];
   rest?: FlexProps;
}> = ({ icon, children, subCategory, ...rest }) => {
   const title = useDisclosure();
   return (
      <>
         <Flex
            align="center"
            px="4"
            mx="2"
            rounded="md"
            pt="1"
            cursor="pointer"
            role="group"
            transition=".20s ease"
            _hover={{
               color: 'rgb(0, 158, 127)',
            }}
            {...rest}
            onClick={title.onToggle}
         >
            {React.createElement(icon)}
            {children}
            <Icon
               as={ChevronRightIcon}
               ml="auto"
               transform={title.isOpen ? 'rotate(90deg)' : undefined}
            />
         </Flex>
         <SubItem isOpen={title.isOpen} subCategory={subCategory} />
      </>
   );
};

const SidebarContent: React.FC = () => {
   const { data } = useQuery(GET_CATEGORIES);
   return (
      <Flex
         direction="column"
         as="div"
         fontSize="sm"
         aria-label="Main Navigation"
         height="100vh"
         backgroundColor="#fff"
         display={{ sm: 'none', xs: 'none' }}
      >
         {data?.categories?.map((category: Category, index: number) => (
            <NavItem
               icon={iconTypes[category.icon]}
               key={index}
               subCategory={category.children}
            >
               <chakra.div marginLeft="10px">
                  <p>{category.title}</p>
               </chakra.div>
            </NavItem>
         ))}
      </Flex>
   );
};

const Sidebar: React.FC = () => {
   return (
      <SidebarWrapper>
         <Sticky enabled={true}>
            <SidebarContent />
         </Sticky>
      </SidebarWrapper>
   );
};

export default React.memo(Sidebar);
