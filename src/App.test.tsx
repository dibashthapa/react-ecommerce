import React from "react";
import { render,  wait , waitForDomChange , cleanup} from "@testing-library/react";
import images from "./data/image";
import App from './App'

afterEach(cleanup)  

it("should match the search name",async () => {
  const { getByText , debug } = render(<App />);
  expect(getByText("Lime")).toBe(images[0].name)
  await waitForDomChange()
  debug() 
});
