export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  const resultArr = [];
  if (start > end) {
    for (let i = start; i > end; i -= 1) {
      resultArr.push(i);
    }
  } else {
    for (let i = start; i < end; i += 1) {
      resultArr.push(i);
    }
  }
  return resultArr;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  return (numbers.length === 0) ? 0 : numbers.reduce((a, b) => a + b);
}
