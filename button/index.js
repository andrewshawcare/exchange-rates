export default ({ label = "" } = {}) => {
  const buttonElement = document.createElement("button");
  buttonElement.innerText = label;
  return buttonElement;
};
