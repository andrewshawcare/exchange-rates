import ButtonElement from "./index.js";

describe("Button", () => {
  it("is a button", () => {
    expect(ButtonElement().nodeName).toBe("BUTTON");
  });

  it("renders the text label correctly", () => {
    const textLabel = "Lorem ipsum";

    expect(ButtonElement({ textLabel: textLabel }).innerText).toBe(textLabel);
  });
});
