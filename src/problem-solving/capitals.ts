/*
link to notion page for this problem: https://www.notion.so/weareacademy/Programming-Exercises-Katas-217703f82e9d4b63ba5511396707c6cb?p=76c0cdd3671946259795e7928a4fe739&pm=s
function: printCapitalsQuiz
params: 
    - object
return string
===
reversedKey = ""
for each pair assign the reversed key to reversedKey
return Of what country is key.value the capital?: Answer: reversedKey
*/

function printCapitalsQuiz (capitals: {[index: string]:string}): string{
    let reversedKey= ""
    let arr: string[] = []
    for (let pair in capitals){
        reversedKey = reverseString(pair)
        arr.push(`Of what country is ${capitals[pair]} the capital?: Answer: ${reversedKey}`)
    }
    return arr.join(' ') 
}

//helper function
// return: string
function reverseString(str: string): string{
    let arr = str.split('')
    let reversedArr = arr.reverse()
    let reversedStr = reversedArr.join('')
    return reversedStr
}

export default printCapitalsQuiz;