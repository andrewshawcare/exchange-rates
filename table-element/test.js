import TableElement from "./index.js";
import ReactDOM from "react-dom";

describe("Table element", () => {
  let containerElement;

  beforeEach(() => {
    containerElement = document.createElement("div");
    document.body.appendChild(containerElement);
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("is a table", () => {
    ReactDOM.render(TableElement(), containerElement);
    const tableElement = containerElement.querySelector("table");

    expect(tableElement.nodeName).toBe("TABLE");
  });

  it("has a caption", () => {
    const caption = { text: "Lorem ipsum" };
    ReactDOM.render(TableElement({ caption }), containerElement);
    const tableElement = containerElement.querySelector("table");

    expect(tableElement.querySelector("caption").textContent).toBe(
      caption.text
    );
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
    ReactDOM.render(TableElement({ header }), containerElement);
    const tableElement = containerElement.querySelector("table");

    const headingElements = Array.from(
      tableElement.querySelectorAll("thead tr th")
    );

    headingElements.forEach((headingElement, index) => {
      expect(headingElement.textContent).toBe(header.headings[index].text);
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
    ReactDOM.render(TableElement({ header }), containerElement);
    const tableElement = containerElement.querySelector("table");

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
    ReactDOM.render(TableElement({ body }), containerElement);
    const tableElement = containerElement.querySelector("table");

    const rowElements = Array.from(tableElement.querySelectorAll("tbody tr"));
    rowElements.forEach((rowElement, rowIndex) => {
      const datumElements = rowElement.querySelectorAll("td");
      datumElements.forEach((datumElement, datumIndex) => {
        expect(datumElement.textContent).toBe(
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
    ReactDOM.render(TableElement({ body }), containerElement);
    const tableElement = containerElement.querySelector("table");

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
