import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders title in default PL language", () => {
  render(<App />);
  const title = screen.getByText(/oferta/i);
  expect(title).toBeInTheDocument();
});
