import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to be 'Change to red'
  expect(colorButton).toHaveTextContent("Change to red");
});

test("initial conditions", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("when the checkbox is checked, the button's active state should be toggled.", () => {
  render(<App/>);

  // find an element with a role of button
  const colorButton = screen.getByRole("button", { name: "Change to blue"});

  // expect the button is enabled
  expect(colorButton).toBeEnabled();

  // find an element with a role of checkbox
  const checkbox = screen.getByRole("checkbox");

  // click checkbox
  fireEvent.click(checkbox);

  // expect the checkbox is checked
  expect(checkbox).toBeChecked();

  // expect the button is disabled
  expect(colorButton).toBeDisabled();

  // click checkbox
  fireEvent.click(checkbox);

  // expect the button is enabled
  expect(colorButton).toBeEnabled();
})