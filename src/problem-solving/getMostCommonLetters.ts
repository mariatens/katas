export default function getMostCommonLetters(inputText: string, numberOfWinners: number): [string,number][]{
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
    const sorted = tuples.sort((a, b) => b[1] - a[1]); //1 is to order the numbers inside the tuples
    return sorted
}

//understand how sort works
//[ [ 'l', 2 ], [ 'h', 1 ], [ 'e', 1 ], [ 'o', 1 ] ]

