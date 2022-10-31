function pairStrings(str: string): string { 
    let first: string = ""
    let second: string = ""
    for (let i = 0; i < str.length; i++){
      if (str[i] === "*"){
        first = str.slice(0, i)
        second = str.slice(i+1, str.length)
      }
    }
    let arr: string[] = []
    for (let j = 0; j < first.length; j ++){
      arr.push(first[j], second[j])
    }
    return arr.join(''); 
  
  }

  export default pairStrings;