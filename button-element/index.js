export default ({ text = "", onclick = () => {} } = {}) => {
  const buttonElement = document.createElement("button");

  buttonElement.classList.add("button");
  buttonElement.innerText = text;
  buttonElement.onclick = onclick;

  return buttonElement;
};
