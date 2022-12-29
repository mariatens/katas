function countObj(inputStr: string): { [index: string]: number } {
  let strObj: { [index: string]: number } = {};
  for (let letter of inputStr) {
    let counter = counterStr(letter, inputStr);
    strObj[letter] = counter;
  }
  return strObj;
}

//helper function
function counterStr(letter: string, inputStr: string): number {
  let counter: number = 0;
  for (let char of inputStr) {
    if (char === letter) {
      counter++;
    }
  }
  return counter;
}

// simpler function
function counterSimple(inputStr: string): { [index: string]: number } {
  let obj: { [index: string]: number } = {};
  for (let char of inputStr) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}
