function countObj(inputStr){
    let strObj = {}
    for (let letter of inputStr){
        let counter = countNumOccurrences(letter, inputStr)
        strObj[letter] = counter

    }
    return strObj
}

//helper function
function counter(letter, inputStr){
    let counter = 0
    for (let char of inputStr){
        if (char === letter){
            counter ++
        }
    }
    return counter

}