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









/*
traditional for each number of the array
    sum it to the rest of the numbers -> you do that with a nested loop
        if the solution is equal to target && the indices are not the same
            return i and the other i as an array
*/

