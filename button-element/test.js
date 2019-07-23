import ButtonElement from "./index.js";

describe("Button", () => {
  it("is a button", () => {
    expect(ButtonElement().nodeName).toBe("BUTTON");
  });

  it("has the correct class", () => {
    expect(ButtonElement().classList.contains("button")).toBe(true);
  });

  it("renders the text correctly", () => {
    const text = "Lorem ipsum";

    expect(ButtonElement({ text: text }).innerText).toBe(text);
  });

  it("responds to a click", async done => {
    ButtonElement({ onclick: done }).click();
  });
});
