function addAfter(array, index, newItem) {
  return [...array.slice(0, index), newItem, ...array.slice(index)];
}
const newArray = addAfter([0, 2, 3], 1, 1);
console.log(newArray);
