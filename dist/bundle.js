var Button = ({ label = "" } = {}) => {
  const buttonElement = document.createElement("button");
  buttonElement.innerText = label;
  return buttonElement;
};

document.body.appendChild(Button({ label: "Hello, world!?" }));
