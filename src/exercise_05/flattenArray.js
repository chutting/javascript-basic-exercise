// const flatMultiLayer = (ele, arr) => {
//   if (Array.isArray(ele)) {
//     ele.forEach(element => flatMultiLayer(element, arr));
//   } else {
//     arr.push(ele);
//   }
//   return arr;
// };

export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (!array) {
    throw new Error('Flatten undefined or null array');
  }

  // * Use the flat function of Array in es6.
  // return array.flat();

  // * without es6.
  const resultArr = [];
  array.forEach((ele) => {
    if (Array.isArray(ele)) {
      ele.forEach((element) => {
        resultArr.push(element);
      });
    } else {
      resultArr.push(ele);
    }
  });
  return resultArr;

  // * multi layer flat without es6
  // return flatMultiLayer(array, []);
}
