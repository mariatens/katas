function towerBuilder(nFloors: number) {
  const arr = [1];
  for (let i = 1; i < nFloors; i++) {
    arr.push(arr[arr.length - 1] + 2);
  }
  const starArr = arr.map((i) => "*".repeat(i));
  let count = starArr[starArr.length - 1].length - 1;
  for (let i = 0; i < nFloors; i++) {
    if (i !== 0) {
      count = count - 2;
    }
    let spaces = " ".repeat(count / 2);
    starArr[i] = starArr[i].concat(spaces);
    starArr[i] = spaces + starArr[i];
  }
  return starArr;
}
