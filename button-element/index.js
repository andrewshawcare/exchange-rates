export default ({ textLabel = "" } = {}) => {
  const buttonElement = document.createElement("button");
  buttonElement.innerText = textLabel;
  return buttonElement;
};
