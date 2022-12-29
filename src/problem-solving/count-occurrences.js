/* 
function:
    name:count occurences
    parameter: string INTPUT_STRING 'hello
    return: object
    =================================

psuedo-code:
declare empty object STR_OBJ
    for(for each LETTER of INPUT_STRING):
        COUNTER = countNumOccurences(LETTER in STRING_INPUT)
        add LETTER as key to STR_OBJ add COUNTER as value
    endfor
    return STR_OBJ
END

funtion:
    name: countNumOccurences
    param: string -LETTER
    param: string -INPUT_STRING
    returns: number
    psuedo code:
===========================
    declare COUNTER set to 0
    for(each CHAR of INPUT_STRING):
        if(CHAR is equal to LETTER):
            add one to COUNTER
        endif
    endfor
    return COUNTER
*/
function countOccurrences(inputStr) {
  let strObj = {};
  for (let letter of inputStr) {
    let counter = countNumOccurrences(letter, inputStr);
    strObj[letter] = counter;
  }
  return strObj;
}

//helper function
function countNumOccurrences(letter, inputStr) {
  let counter = 0;
  for (let char of inputStr) {
    if (char === letter) {
      counter++;
    }
  }
  return counter;
}

// test cases
console.log(countOccurrences("HELLO"), { H: 1, E: 1, L: 2, O: 1 });
console.log(countOccurrences("WORLD"), { W: 1, O: 1, L: 1, R: 1, D: 1 });

//simpler way of doing it
function countOccurrencesSimple(inputStr) {
  let obj = {};
  for (let char of inputStr) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}
console.log(countOccurrencesSimple("HELLO"), { H: 1, E: 1, L: 2, O: 1 });
