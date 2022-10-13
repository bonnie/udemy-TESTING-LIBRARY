import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Options from "../Options";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  // find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  // @ts-ignore
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("Displays image for each toppings option from server", async () => {
  // Mock Service Worker will return three toppings from server
  render(<Options optionType="toppings" />);

  // find images, expect 3 based on what msw returns
  const images = await screen.findAllByRole("img", { name: /topping$/i });
  expect(images).toHaveLength(3);

  // check the actual alt text for the images
  // @ts-ignore
  const imageTitles = images.map((img) => img.alt);
  expect(imageTitles).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});

test("don't update total if scoops input is invalid", async () => {
  const user = userEvent.setup();
  render(<Options optionType="scoops" />);

  // expect button to be enabled after adding scoop
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "-1");

  // make sure scoops subtotal hasn't updated
  const scoopsSubtotal = screen.getByText("Scoops total: $0.00");
  expect(scoopsSubtotal).toBeInTheDocument();

  // the above test does not uncover issues with the code, namely
  // entering a number like "2.5" or "100" ends up with the total at
  // $4.00 or $20.00, respectively (it takes the "valid" part of the
  // input -- "2" and "10", respectively -- and stops updating once
  // the input becomes invalid.)
  //
  // This test actually uncovers that behavior. For more details, see
  //   https://www.udemy.com/course/react-testing-library/learn/#questions/18448838/
  //

  // // .clear focuses the element
  // //  (see https://testing-library.com/docs/user-event/utility/#clear)
  // await user.clear(vanillaInput);

  // // .keyboard types one character at a time into the focused element
  // //   (see https://testing-library.com/docs/user-event/keyboard)
  // await user.keyboard("2.5");

  // // make sure scoops subtotal hasn't updated
  // expect(scoopsSubtotal).toHaveTextContent("$0.00");

  // // do the same test for "100"
  // await user.clear(vanillaInput);
  // await user.keyboard("100");
  // expect(scoopsSubtotal).toHaveTextContent("$0.00");
});
