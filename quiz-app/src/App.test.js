import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  // find an element with a role of button and text of 'Change to Midnight Blue'
  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });

  // expect the background color to be MediumVioletRed
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  // click button
  fireEvent.click(colorButton);

  // expect the background color to be MidnightBlue
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });

  // expect the button text to be 'Change to MediumVioletRed'
  expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

test("initial conditions", () => {
  render(<App />);

  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("when the checkbox is checked, the button's active state should be toggled.", () => {
  render(<App />);

  // find an element with a role of button
  const colorButton = screen.getByRole("button", { name: "Change to Midnight Blue" });

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
});

test("when the button is disabled, it should be gray.", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "Change to Midnight Blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkbox);

  // expect the button is disabled
  expect(button).toBeDisabled();

  // expect the background color to be gray
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);

  // expect the button is enabled
  expect(button).toBeEnabled();

  // expect the background color to be MediumVioletRed
  expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });

  fireEvent.click(button);

  // expect the background color to be MidnightBlue
  expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });

  fireEvent.click(checkbox);

  // expect the button is disabled
  expect(button).toBeDisabled();

  // expect the background color to be gray
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);

  // expect the button is enabled
  expect(button).toBeEnabled();

  // expect the background color to be MidnightBlue
  expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });
});
