import { maxHeaderSize } from "http"

function getMostCommonLetters(inputText: string, numberOfWinners: number): [string,number][]{
    let obj: {[index: string]: number} = {}
        for (let letter of inputText){
            if(!obj[letter]){
                obj[letter] = 1
            }
            else{
                obj[letter] ++
            }
        }
    const tuples = Object.entries(obj)
    const maxArr: [[string, number]] = [tuples[0]]
    for (const array of tuples){
        if (array[1]> ){
            // maxArr.push(array)
            console.log(array)
            console.log(tuples[0])
    }

    // values.slice(numberOfWinners)
    }
return [["h", 2]]
}
console.log(getMostCommonLetters("hello", -3))