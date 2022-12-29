function filter(inputArr, predicateFn) {
  let newArr = [];
  for (let element of inputArr) {
    if (predicateFn(element)) {
      newArr.push(element);
    }
  }
  return newArr;
}

console.log(filter([10, 50, -20, -10, 100], (v) => v < 11));
