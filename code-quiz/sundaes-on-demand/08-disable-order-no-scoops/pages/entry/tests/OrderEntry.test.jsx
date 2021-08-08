import {  render,  screen,  waitFor,} from '../../../test-utils/testing-library-utils';
import OrderEntry from '../OrderEntry';
import { rest } from 'msw';
import { server } from '../../../mocks/server';

test('handles error for scoops and toppings routes', async () => {
  server.resetHandlers(
    rest.get('http://localhost:3030/scoops', (req, res, ctx) =>
      res(ctx.status(500))
    ),
    rest.get('http://localhost:3030/toppings', (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  render(<OrderEntry />);

  await waitFor(async () => {
    const alerts = await screen.findAllByRole('alert');
    expect(alerts).toHaveLength(2);
  });
});

//KullKatt and Mike's code
test('Order button is disabled if there are no scoops ordered', async () => {
  //now we add the setOrderPhase pro to avoid TypeScript errors 
  render(<OrderEntry setOrderPhase={jest.fn()} />);

//then we find the order sundae button
  let orderButton = screen.getByRole('button', { name: /order sundae/i });

//and we expect it toBeDisabled initially
  expect(orderButton).toBeDisabled();

//we awaited our vanilla scoop to be inputed and we need at least 1 scoop
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });
//before we enter ttext we clear the input
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '1');

//and now we expect to see the orderButton enabled
  expect(orderButton).toBeEnabled();

//now we remove the scoop
  userEvent.clear(vanillaInput);
  userEvent.type(vanillaInput, '0');
//and we expect the orderButton toBeDisabled
  expect(orderButton).toBeDisabled();

//and we moved on to check the orderDisabled attribute on orderEntry.jsx
});
//end