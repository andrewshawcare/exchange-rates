import TableElement from "./index.js";

describe("Table element", () => {
  it("is a table", () => {
    expect(TableElement().nodeName).toBe("TABLE");
  });

  it("has the table class", () => {
    expect(TableElement().classList.contains("table")).toBe(true);
  });

  it("has a caption", () => {
    const caption = { text: "Lorem ipsum" };
    const tableElement = TableElement({ caption: caption });

    expect(tableElement.querySelector("caption").innerText).toBe(caption.text);
  });

  it("has a header with an ordered list of headings", () => {
    const header = {
      headings: [
        { text: "Lorem" },
        { text: "Ipsum" },
        { text: "Dolor" },
        { text: "Amit" }
      ]
    };
    const tableElement = TableElement({ header: header });

    const headingElements = Array.from(
      tableElement.querySelectorAll("thead tr th")
    );

    headingElements.forEach((headingElement, index) => {
      expect(headingElement.innerText).toBe(header.headings[index].text);
    });
  });

  it("has a header with an ordered list of classes for each heading", () => {
    const header = {
      headings: [
        { classList: ["lorem", "ipsum"] },
        { classList: ["dolor"] },
        { classList: ["amit"] }
      ]
    };
    const tableElement = TableElement({ header: header });

    const headingElements = Array.from(
      tableElement.querySelectorAll("thead tr th")
    );

    headingElements.forEach((headingElement, index) => {
      expect(Array.from(headingElement.classList)).toEqual(
        header.headings[index].classList
      );
    });
  });

  it("has a body with an ordered list of rows and row data", () => {
    const body = {
      rows: [
        [
          { text: "Lorem" },
          { text: "Ipsum" },
          { text: "Dolor" },
          { text: "Amit" }
        ],
        [
          { text: "Lorem" },
          { text: "Dolor" },
          { text: "Ipsum" },
          { text: "Amit" }
        ]
      ]
    };
    const tableElement = TableElement({ body: body });

    const rowElements = Array.from(tableElement.querySelectorAll("tbody tr"));
    rowElements.forEach((rowElement, rowIndex) => {
      const datumElements = rowElement.querySelectorAll("td");
      datumElements.forEach((datumElement, datumIndex) => {
        expect(datumElement.innerText).toBe(
          body.rows[rowIndex][datumIndex].text
        );
      });
    });
  });

  it("has a body with an ordered list of classes for each row datum", () => {
    const body = {
      rows: [
        [
          { classList: ["lorem", "ipsum"] },
          { classList: ["dolor"] },
          { classList: ["amit"] }
        ],
        [{ classList: ["lorem"] }, { classList: ["dolor", "ipsum"] }]
      ]
    };
    const tableElement = TableElement({ body: body });

    const rowElements = Array.from(tableElement.querySelectorAll("tbody tr"));
    rowElements.forEach((rowElement, rowIndex) => {
      const datumElements = rowElement.querySelectorAll("td");
      datumElements.forEach((datumElement, datumIndex) => {
        expect(Array.from(datumElement.classList)).toEqual(
          body.rows[rowIndex][datumIndex].classList
        );
      });
    });
  });
});
