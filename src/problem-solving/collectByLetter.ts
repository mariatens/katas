// https://www.notion.so/weareacademy/Programming-Exercises-Katas-217703f82e9d4b63ba5511396707c6cb?p=f4a1ffb5354541e4b169f373e0894df6&pm=s


function collectByLetter(words: string[]): {[index: string]: string[]}{
    let obj: {[index: string]: string[]} = {}
        for (let word of words){
            console.log(word)
            if(obj[word[0]]){
                obj[word[0]].push(word)
            }
            else{
                obj[word[0]] = [word]
            }
        }
        return obj
    }
  

    


export default collectByLetter