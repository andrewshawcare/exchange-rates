import React from "react";

export default (props = {}) => {
  const children = [];

  if (props.caption) {
    const { text } = props.caption;

    children.push(React.createElement("caption", null, text));
  }

  if (props.header) {
    const { headings = [] } = props.header;

    children.push(
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          ...headings.map(heading => {
            const { text = "", classList = [] } = heading;

            return React.createElement(
              "th",
              { className: classList.join(" ") },
              text
            );
          })
        )
      )
    );
  }

  if (props.body) {
    const { rows = [] } = props.body;

    children.push(
      React.createElement(
        "tbody",
        null,
        ...rows.map(row => {
          return React.createElement(
            "tr",
            null,
            ...row.map(datum => {
              const { text = "", classList = [] } = datum;

              return React.createElement(
                "td",
                {
                  className: classList.join(" ")
                },
                text
              );
            })
          );
        })
      )
    );
  }

  return React.createElement("table", props, ...children);
};
