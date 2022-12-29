function pigIt(str: string): string{
    const arr = str.split(' ') 
    const finalArr = []
    for (let word of arr){
      const letterArr: string[] = word.split('')
      const firstL= letterArr.shift()
      letterArr.push(firstL as string)
      if (!word.endsWith("!") && !word.endsWith("?")) {
        letterArr.push("ay")
      }
      const newWord = letterArr.join('')
      finalArr.push(newWord)
    }
    const finalStr = finalArr.join(' ')
    return finalStr
  }