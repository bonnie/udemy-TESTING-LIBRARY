import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  render(<App />); //simulated DOM
  const headingElement = screen.getByText(/learn react/i); //find element be display text
  expect(headingElement).toBeInTheDocument();
});
