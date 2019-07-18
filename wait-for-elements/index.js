export default async ({ parentElement, selector } = {}) =>
  new Promise((resolve, reject) => {
    if (!(parentElement instanceof HTMLElement)) {
      reject("parentElement must be an instance of HTMLElement");
    }

    window.requestAnimationFrame(() => {
      const elements = Array.from(parentElement.querySelectorAll(selector));
      if (elements.length > 0) {
        resolve(elements);
      }
    });
  });
