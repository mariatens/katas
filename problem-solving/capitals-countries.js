function printCapitalsQuiz (capitals) {
    let reversedKey = ""
    for (let pair in capitals){
        reversedKey = reverseString(pair)
        return `Of what country is ${capitals[pair]} the capital?: Answer: ${reversedKey}`
    }
}

//helper function
// return: string
function reverseString(str){
    let arr = str.split('')
    let reversedArr = arr.reverse()
    let reversedStr = arr.join('')
    return reversedStr
}
// //test
// console.log(reverseString("hello"), "olleh")


const capitals = {
    Afghanistan: "Kabul"
  };

console.log(printCapitalsQuiz(capitals))