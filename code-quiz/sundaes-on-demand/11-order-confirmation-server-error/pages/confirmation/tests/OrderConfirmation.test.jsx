//Since we need to wrap this test in an order detail provider, we imported from the test-utils
//the test-utils overrides render with one that was wrapped in the orderDetailsProvider
    //(use ctrl+click on the test-utils to comfirm that)
import { render, screen } from '../../../test-utils/testing-library-utils';

//to overide the server respone, we had to import the server, and the rest method from mock service worker|mock server worker
import { server } from '../../../mocks/server';
import { rest } from 'msw';

//we also imported OrderComfirmation because we're going to render it
import OrderConfirmation from '../OrderConfirmation';

test('Server error when confirming an order', async () => {
// override the msw response for the order endpoint of the post method
  server.resetHandlers(
    rest.post('http://localhost:3030/order', (req, res, ctx) =>
//we overrode it with this server error
      res(ctx.status(500))
//by using the server.resetHandlers
    )
  );

  render(<OrderConfirmation />);
//now we find the alert,
//and we await the alert because it won't show until an error comes from the server

  const alert = await screen.findByRole('alert');

//and we expect the alert to have the following text
  expect(alert).toHaveTextContent('An unexpected error occurred. Please try again later.'
  );
});