//https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript

//times out 

function sumPairs(ints: number[], s: number) {
    let winningPair:number[] = []
    let smallestIndex = ints.length
    for (let i = 0; i < ints.length; i++) {
      for (let j = i+1; j < ints.length; j++) {
        if (ints[i] + ints[j] === s) {
          if (j < smallestIndex) {
            smallestIndex = j
            winningPair = [ints[i],ints[j]]
            }
          }
        }
      }
    return winningPair
  }