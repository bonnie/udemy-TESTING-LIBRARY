import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("checkbox enables button on first click and disables on second click", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  const button = screen.getByRole("button", { name: "Confirm order" });

  // check the checkbox starts out unchecked
  expect(checkbox).not.toBeChecked();

  // enable button
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();

  // disable button
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
});
