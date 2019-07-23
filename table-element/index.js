export default ({ caption, header, body } = {}) => {
  const tableElement = document.createElement("table");

  tableElement.classList.add("table");

  if (caption) {
    const { text } = caption;
    const captionElement = document.createElement("caption");
    captionElement.innerText = text;
    tableElement.appendChild(captionElement);
  }

  if (header) {
    const { headings = [] } = header;
    const headerElement = document.createElement("thead");
    const rowElement = document.createElement("tr");
    rowElement.append(
      ...headings.map(heading => {
        const { text = "", classList = [] } = heading;
        const headingElement = document.createElement("th");

        headingElement.classList.add(...classList);
        headingElement.innerText = text;

        return headingElement;
      })
    );
    headerElement.appendChild(rowElement);
    tableElement.appendChild(headerElement);
  }

  if (body) {
    const { rows = [] } = body;
    const bodyElement = document.createElement("tbody");
    bodyElement.append(
      ...rows.map(row => {
        const rowElement = document.createElement("tr");

        rowElement.append(
          ...row.map(datum => {
            const { text = "", classList = [] } = datum;
            const datumElement = document.createElement("td");

            datumElement.classList.add(...classList);
            datumElement.innerText = text;

            return datumElement;
          })
        );

        return rowElement;
      })
    );
    tableElement.appendChild(bodyElement);
  }

  return tableElement;
};
