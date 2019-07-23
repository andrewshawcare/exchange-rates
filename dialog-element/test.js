import DialogElement from "./index.js";

describe("Dialog element", () => {
  it("is a dialog", () => {
    expect(DialogElement().nodeName).toBe("DIALOG");
  });

  it("has the correct class", () => {
    expect(DialogElement().classList.contains("dialog")).toBe(true);
  });

  it("renders the text label correctly", () => {
    const textLabel = "Lorem ipsum";

    expect(DialogElement({ text: textLabel }).innerText).toBe(textLabel);
  });

  it("renders closed by default", () => {
    expect(DialogElement().open).toBe(false);
  });
});
