import Button from "./index.js";

describe("Button", () => {
  it("Renders the label correctly", () => {
    expect(Button({ label: "Lorem ipsum" }).innerText).toBe("Lorem ipsum");
  });
});
