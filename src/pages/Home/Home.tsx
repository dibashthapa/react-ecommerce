import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Search from "./Screens/Search";
import ProductList from "./Screens/ProductList";
import Sidebar from "../../components/Sidebar";
import { Grid } from "@chakra-ui/react";
const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Header>
        <Navbar />
        <Search />
      </Header>
      <Grid templateColumns="280px 1fr" backgroundColor="rgb(247, 247, 247)">
        <Sidebar />
        <ProductList />
      </Grid>
    </React.Fragment>
  );
};

export default Home;
