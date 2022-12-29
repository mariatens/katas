//https://www.notion.so/weareacademy/Write-zip-arrA-arrB-f8b6a13af84e404c8575f889d569f493
function writeZip(arr1: any[], arr2: any[]) {
  const array = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.length > i && arr2.length > i) {
      array.push([arr1[i], arr2[i]]);
    }
  }
  return array;
}

// console.log(writeZip([1, 2, 3, 4], ['a', 'b']))

function zipWith(fN: Function, arr1: any[], arr2: any[]) {
  const finalArr = [];
  let tuples = writeZip(arr1, arr2);
  for (let tuple of tuples) {
    let result = fN(tuple[0], tuple[1]);
    finalArr.push(result);
  }
  return finalArr;
}

const sumTwo = (a: number, b: number) => a + b;

console.log(zipWith(sumTwo, [1, 2, 3], [4, 5, 6]));
console.log(zipWith(Math.min, [1, 20, 30, -20], [4, 5, 60]));

console.log(
  zipWith((a: any, b: any) => ({ a, b }), [1, 2, 3, 4], ["ONE", "TWO"])
);
