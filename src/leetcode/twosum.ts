function twoSum(nums: number[], target: number): number[]|undefined {
    let tempSum = 0
    for (let i = 0; i< nums.length; i++){
            for (let j = 0; j<nums.length; j++){
                tempSum = nums[i]+nums[j] 
                if(tempSum === target && i !==j){
                    return [i,j]
                }
            }
        }
            
    }


//optimised code with hash map:

function twoSumOptimised(nums: number[], target: number): number[]|undefined {
    // Create an empty hash map
    const indices: {[key: number]: number} = {}

    // Loop through the input array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the difference between the target sum and the current element
        const diff = target - nums[i]

        // If the difference is in the hash map, return the indices of the pair
        if (indices[diff] !== undefined) {
            return [indices[diff], i]
        }

        // Otherwise, add the current element and its index to the hash map
        indices[nums[i]] = i
    }

    // If no pair was found, return undefined
    return undefined
}







/*
traditional for each number of the array
    sum it to the rest of the numbers -> you do that with a nested loop
        if the solution is equal to target && the indices are not the same
            return i and the other i as an array
*/

