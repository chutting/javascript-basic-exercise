/* eslint-disable no-param-reassign */
const movePointer = (pointer, arr) => {
  pointer += 1;
  return (pointer === arr.length) ? null : { value: arr[pointer], next: movePointer(pointer, arr) };
};
/* eslint-enable no-param-reassign */

export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if (!array) {
    throw new Error('Creating list from undefined array');
  } else if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }

  const pointer = 0;
  const list = {
    value: array[pointer],
    next: movePointer(pointer, array),
  };

  return list;
}
