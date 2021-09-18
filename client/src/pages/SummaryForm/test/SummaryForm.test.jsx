import React from "react";
import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";
describe("Summary form tests --------------", () => {
  beforeEach(() => {
    render(<SummaryForm />);
  });
  test("checkbox is by default NOT checked & enables", () => {
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const button = screen.getByRole("button", { name: /confirm order/i });
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
    //
  });

  test("checkbox when checked enables button and again click to reset button & checkbox", () => {
    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    const button = screen.getByRole("button", { name: /confirm order/i });
    userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(button).toBeEnabled();

    //check if when clicked again, button and checkbox come back to initial state
    userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });
});
