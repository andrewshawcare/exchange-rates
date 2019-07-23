import waitForElements from "./index.js";

describe("Wait for elements", () => {
  it("returns when the selector matches", async () => {
    const parentElement = document.createElement("div");
    parentElement.appendChild(document.createElement("p"));

    const matchedElements = await waitForElements({
      parentElement: parentElement,
      selector: "p"
    });

    expect(matchedElements.length).toBe(1);
  });

  it("rejects when the parentElement does not exist", async () => {
    try {
      await waitForElements({
        selector: "p"
      });
    } catch (error) {
      expect(error.message).toBe(
        "parentElement must be an instance of HTMLElement"
      );
    }
  });

  it("times out when the selector does not match", async () => {
    try {
      await waitForElements({
        parentElement: document.createElement("div"),
        selector: "p",
        timeout: 20
      });
    } catch (error) {
      expect(error.message).toBe("waitForElements has timed out");
    }
  });
});
