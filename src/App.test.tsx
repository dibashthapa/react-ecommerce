import React from "react";
import { render } from "@testing-library/react";
import store from "./store";
import { Provider } from "react-redux";
import SearchAutoComplete from "./components/SearchAutocomplete/SearchAutoComplete";
import { BrowserRouter, Route } from "react-router-dom";
import { Product } from "./components/Product/Product";
import App from "./App";
it("should match the search name", async () => {
  const { debug, getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Route>
          <SearchAutoComplete value={"Lime"} />
        </Route>
      </BrowserRouter>
    </Provider>
  );
  expect(getByText("Lime").textContent).toBe("Lime");
  debug();
});

