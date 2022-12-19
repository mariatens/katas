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

  //optimised version with hash map:
  export function sumPairsOptimised(ints: number[], s: number) {
    // Create an empty hash map
    const indices: {[key: number]: number} = {}

    // Loop through the input array
    for (let i = 0; i < ints.length; i++) {
        // Calculate the difference between the target sum and the current element
        const diff = s - ints[i]

        // If the difference is in the hash map, return the indices of the pair
        if (indices[diff] !== undefined) {
            return [diff, ints[i]]
        }

        // Otherwise, add the current element and its index to the hash map
        indices[ints[i]] = i
    }

    // If no pair was found, return undefined
    return undefined
}
