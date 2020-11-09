import React from "react";
import "./App.css";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core";
import { Product } from './pages'
import { Dashboard } from "./sections/Dashboard";
import { Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./sections/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/store-manager" component={Dashboard} />
        <Route path="/product/" component={ Product }/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
