import {fireEvent, render, screen} from "@testing-library/react";
import ConfirmOnStateButton from "../components/ConfirmOnStateButton.jsx";

test("checkbox initial state is unchecked and order button is disabled", () => {
  render(<SummaryForm />);
  const tandcCheckBoxElem = screen.getByRole("checkbox", {
    name: /agree to/i
  });

  const confirmButtonElem = screen.getByRole("button", {
    name: /confirm order/i
  });

  expect(confirmButtonElem).toBeDisabled();
  expect(tandcCheckBoxElem).not.toBeChecked();

});

test("checkbox enables and disables confirm order button", () => {
  render(<SummaryForm />);
  const tandcCheckBoxElem = screen.getByRole("checkbox", {
    name: /agree to/i
  });

  const confirmButtonElem = screen.getByRole("button", {
    name: /confirm order/i
  });

  // first make sure the button is disabled.
  expect(confirmButtonElem).toBeDisabled();

  // and when checkbox is checked, button is enabled.
  fireEvent.click(tandcCheckBoxElem);

  expect(confirmButtonElem).not.toBeDisabled();
})