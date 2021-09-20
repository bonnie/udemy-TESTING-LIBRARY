import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";
import { setTimeout } from "timers";
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

  test("popover responds to hover", () => {
    // no popover found on page initialization
    const nullPopover = screen.queryByText(
      "Terms and conditions, asd asd sd asdas ouashda usdao sdhaso ihasodi asodih asodih."
    );
    expect(nullPopover).not.toBeInTheDocument();

    // popover appears on label hover
    const label = screen.getByLabelText("Terms and conditions");
    userEvent.hover(label);
    const popover = screen.getByText(
      "Terms and conditions, asd asd sd asdas ouashda usdao sdhaso ihasodi asodih asodih."
    );

    expect(popover).toBeInTheDocument();

    // popover will be removed after hover removal
    userEvent.unhover(label);
    waitForElementToBeRemoved(() => {
      screen.queryByText(
        "Terms and conditions, asd asd sd asdas ouashda usdao sdhaso ihasodi asodih asodih."
      );
    });
  });
});
