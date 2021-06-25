import React from 'react';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';
import Search from './Screens/Search';
import ProductList from './Screens/ProductList';
import Sidebar from '../../components/Sidebar';
import Cart from '../../components/Cart';
import { MainContentArea } from './index.style';

const Home: React.FC = () => {
   return (
      <React.Fragment>
         <Header>
            <Navbar />
            <Search />
         </Header>
         <MainContentArea>
            <Sidebar />
            <ProductList />
         </MainContentArea>
         <Cart />
      </React.Fragment>
   );
};

export default Home;
