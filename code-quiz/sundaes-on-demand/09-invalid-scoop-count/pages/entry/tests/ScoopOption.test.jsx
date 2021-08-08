//KullKatt and Mike's code
import { render, screen } from '@testing-library/react';

//userEvent for clearing and typing
import userEvent from '@testing-library/user-event';

//what we'll render
import ScoopOption from '../ScoopOption';


test.only('Signal if the ScoopCount is not a whole number or is out of range', async () => {
//we gave ScoopOption a name and a path because TypeScript gives errors if we don't even if the test passes without them
/*we also gave updateItemCount a mock function so the test don't fail because ScoopCount will run
updateItemCount whenever the input is changed and if the prop is not there the test will have errors*/

  render(<ScoopOption name="" imagePath="" updateItemCount={jest.fn()} />);

//we expect the input to be invalid if the ScoopCount is a negative number
//first we findd the button
  const vanillaInput = screen.getByRole('spinbutton');
//then we clear the input
  userEvent.clear(vanillaInput);
//and if we input the nearest negative number to 0 which is -1
  userEvent.type(vanillaInput, '-1');
//and we expect the toHaveClass to be invalid (reference from the React Bootstrap component)
  expect(vanillaInput).toHaveClass('is-invalid');

//we expect the input to be invalid if the ScoopCount is a non-integer or a decimal like 1.1
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '1.1');
  expect(vanillaInput).toHaveClass('is-invalid');

//we expect the input to be invalid for a ScoopCount higher than 10
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '11');
  expect(vanillaInput).toHaveClass('is-invalid');

//now we negate the test with .not. so that the input is valid
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '3');
  expect(vanillaInput).not.toHaveClass('is-invalid');
});
//end