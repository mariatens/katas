function reduce<T>(array: any[], fn: Function, first: any): any {
  let result = first;
  for (let element of array) {
    result = fn(result, element);
  }
  return result;
}

console.log(reduce([10, 20, 30], (a: number, b:number) => a + b, 0))
console.log(reduce(
    ["charlie", "miles", "thelonious", "dizzy", "chet"],
    (a:any, b:any) => (a + "" + b),
    ""
  ))
console.log(
  reduce(
    ["charlie", "miles", "thelonious", "dizzy", "chet"],
    (obj: any, b: any) => {
      obj[b] = b.length;
      return obj;
    },
    {} as { [k: string]: number }
  )
);
