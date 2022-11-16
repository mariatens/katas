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
    console.log(obj)
    // tuples.sort((a,b)=>b-a)
    return tuples.slice(numberOfWinners)

}
console.log(getMostCommonLetters("hello", -3))