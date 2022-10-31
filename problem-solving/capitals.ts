/*
function: printCapitalsQuiz
params: 
    - object
return string
===
reversedKey = ""
for each pair assign the reversed key to reversedKey
return Of what country is key.value the capital?: Answer: reversedKey
*/

function printCapitalsQuiz (capitals: {}){
    let reversedKey: string = ""
    let sentence = ""
    for (let pair in capitals){
        reversedKey = reverseString(pair)
        sentence = `Of what country is ${capitals[pair]} the capital?: Answer: ${reversedKey}`
    }
    return sentence
}

//helper function
// return: string
function reverseString(str: string): string{
    let arr = str.split('')
    let reversedArr = arr.reverse()
    let reversedStr: string = reversedArr.join('')
    return reversedStr
}

export default printCapitalsQuiz;