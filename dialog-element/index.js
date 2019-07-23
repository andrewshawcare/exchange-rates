export default ({ text = "", open = false } = {}) => {
  const dialogElement = document.createElement("dialog");

  dialogElement.classList.add("dialog");
  dialogElement.open = open;
  dialogElement.innerText = text;

  return dialogElement;
};
