const isPromise = obj => obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';

export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.

  promises.forEach((ele) => {
    if (!isPromise(ele)) {
      throw new Error('Not all elements are promises.');
    }
  });

  let isAllPromiseResolve = true;

  const promise = new Promise((resolve, reject) => {
    promises.forEach((ele, index) => {
      ele.catch(() => {
        isAllPromiseResolve = false;
      }).then(() => {
        if (index === promises.length - 1) {
          if (isAllPromiseResolve) {
            resolve();
          } else {
            reject();
          }
        }
      });
    });
  });

  return promise;
}
