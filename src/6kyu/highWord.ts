// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/solutions/javascript

function high(x: string){
    let highestSum = 0
    let highestWord = ""
    const wordArr = x.split(' ')
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    for (let word of wordArr){
      let sum = 0
      for (let letter of word){
        sum += alphabet.indexOf(letter) + 1
      }
      if (sum > highestSum){
        console.log(sum, word)
        highestSum = sum
        highestWord = word
      }
    }
    return highestWord
  }