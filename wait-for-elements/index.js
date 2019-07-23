export default async ({ parentElement, selector, timeout } = {}) =>
  new Promise((resolve, reject) => {
    if (!(parentElement instanceof HTMLElement)) {
      return reject(
        new Error("parentElement must be an instance of HTMLElement")
      );
    }

    const startDate = new Date().valueOf();
    const queryElements = () => {
      const elements = Array.from(parentElement.querySelectorAll(selector));
      const duration = new Date().valueOf() - startDate;
      if (elements.length > 0) {
        return resolve(elements);
      } else if (timeout && duration > timeout) {
        return reject(new Error("waitForElements has timed out"));
      } else {
        window.requestAnimationFrame(queryElements);
      }
    };

    window.requestAnimationFrame(queryElements);
  });
