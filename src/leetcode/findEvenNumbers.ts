//https://leetcode.com/problems/finding-3-digit-even-numbers/
function findEvenNumbers(digits: number[]): number[] {
    const finalArr: number[] = []
    for (let i = 0; i<digits.length;i++){
        for (let j = 0; j<digits.length;j++){
            for (let k=0;k<digits.length;k++){
                let string = digits[i].toString()+digits[j].toString()+digits[k].toString()
                let integer = parseInt(string)
                if (integer % 2 ===0 && !finalArr.includes(integer) && string.length === 3 && string[0] !== '0'
                && i!== j
                && j!== k
                && k!== i
                ){
                    finalArr.push(integer)
                }
            }
        }
    } 
    return finalArr.sort((a,b)=> a-b)
}

