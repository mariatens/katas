//https://www.codewars.com/kata/5777fe3f355edbf0a5000d11

//Given a two dimensional array, return the co-ordinates of x.
// plan
// go through each subarray, if array includes x, push the index of the subarray and the index of x

// add condition that if more than once, then it's empty

function markXSpot(nestArr: string[][]): number[]{
    let positions = []
    for (let [index, subarray] of nestArr.entries()){
        for (let [subindex, word] of subarray.entries()){
            if (word === "x"){
                positions.push(index, subindex)
            }
        }
    }
    return positions
}

export default markXSpot


// console.log(markXSpot([['1', '2'],['x']]))
// console.log(markXSpot([
//     ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//     ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//     ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//     ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
//     ['o', 'o', 'o', 'o', 'o', 'o', 'x', 'o'],
//     ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
//   ]))