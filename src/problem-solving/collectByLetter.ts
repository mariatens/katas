// https://www.notion.so/weareacademy/Programming-Exercises-Katas-217703f82e9d4b63ba5511396707c6cb?p=f4a1ffb5354541e4b169f373e0894df6&pm=s
//[index: string]: string[]

function collectByLetter(words: string[]): {[index: string]: string[]}{
    let obj: {[index: string]: string[]} = {}
    for (let pair in obj){
        for (let word of words){
            if(word[0]===pair){
                obj[pair].push(word)
            }
        }
    }
    return obj
    console.log(obj)
}
    


export default collectByLetter