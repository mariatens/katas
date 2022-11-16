


export default function findMissingElements(expArr: string[], actArr: string[]): string[]{
    let tracker = false
    let missingArr = []
    for (const expItem of expArr){
      if (!actArr.includes(expItem)){
        missingArr.push(expItem)
      } 
    }
    return missingArr
  }

  // NEED TO DO IT WITHOUT INCLUDES!!