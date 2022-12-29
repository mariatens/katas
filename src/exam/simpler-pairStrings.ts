function simpPairStrings(str: string): string {
  let arr = str.split("");
  let first = arr.slice(0, arr.indexOf("*"));
  let second = arr.slice(arr.indexOf("*") + 1, arr.length);
  let pairedArray = first.map((i, j) => i + second[j]);
  return pairedArray.join("");
}

export default simpPairStrings;
