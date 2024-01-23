import {render, screen} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

const userEventService = userEvent.setup();

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

test("checkbox enables and disables confirm order button", async () => {

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
  await userEventService.click(tandcCheckBoxElem);

  expect(confirmButtonElem).not.toBeDisabled();

  // and checking again will set it back to disabled.
  await userEventService.click(tandcCheckBoxElem);
  expect(confirmButtonElem).toBeDisabled();
})

test("popover responds to hover state", async () => {
  // get the label to the checkbox.
  render(<SummaryForm />);

  const termsAndConditions = screen.getByText(/terms and conditions/i);

  // popover should start hidden.
  let nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);

  expect(nullPopover).not.toBeInTheDocument();


  // popover appears when we mouse over checkbox label
  await userEventService.hover(termsAndConditions);
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover disappears when we mouse out of checkbox label
  await userEventService.unhover(termsAndConditions);
  expect(popover).not.toBeInTheDocument();

});
