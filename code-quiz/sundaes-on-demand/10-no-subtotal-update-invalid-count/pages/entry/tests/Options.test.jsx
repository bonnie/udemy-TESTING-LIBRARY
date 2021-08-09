import { render, screen } from '../../../test-utils/testing-library-utils';

import Options from '../Options';

test('displays image for each scoop option from server', async () => {
  render(<Options optionType="scoops" />);

  // find images
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  // @ts-ignore
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('Displays image for each toppings option from server', async () => {
  // Mock Service Worker will return three toppings from server
  render(<Options optionType="toppings" />);

  // find images, expect 3 based on what msw returns
  const images = await screen.findAllByRole('img', { name: /topping$/i });
  expect(images).toHaveLength(3);

  // check the actual alt text for the images
  // @ts-ignore
  const imageTitles = images.map((img) => img.alt);
  expect(imageTitles).toEqual([
    'Cherries topping',
    'M&Ms topping',
    'Hot fudge topping',
  ]);
});

//KullKatt and Mike's Code
test("ScoopSubTotal is not updated for invalid ScoopCount", async () => {
//we renderered options because it includes both the subtotal and input
//and we gave it an option type of scoop 
  render(<Options optionType="scoops" />);

//since Options populates via a server call we need to await the vanilla input
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  });
//we clearedd it
  userEvent.clear(vanillaInput);
//and added an invalid input
  userEvent.type(vanillaInput, '-1');

//we check if the scoopsSubtotal is at $0.00
  const scoopsSubtotal = screen.getByText('Scoops total: $0.00');
//and we expect to find it written exactly as Scoops total: $0.00 inTheDocument
  expect(scoopsSubtotal).toBeInTheDocument();
});