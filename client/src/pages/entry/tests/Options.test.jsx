import { screen, render } from "@testing-library/react";
import Options from "../Options";

describe("testing options -------------", () => {
  test("displays image and ALT attribute for each scoop option from server", async () => {
    render(<Options optionType="scoops" />);
    const scoopImages = await screen.findAllByRole("img", { name: /scoops$/i });
    expect(scoopImages).toHaveLength(2);

    // confirm alt text of images

    const altTexts = scoopImages.map((element) => element.alt);
    expect(altTexts).toEqual(["Chocolate scoops", "Vanilla scoops"]);
  });
  test("if displays toppings image and alt attribute on Options render", async () => {
    render(<Options optionType="toppings" />);
    const toppingsImages = await screen.findAllByRole("img", {
      name: /toppings$/i,
    });
    expect(toppingsImages).toHaveLength(2);
    const altTexts = toppingsImages.map((img) => img.alt);
    expect(altTexts).toEqual(["M&M's toppings", "Cherry toppings"]);
  });
});
