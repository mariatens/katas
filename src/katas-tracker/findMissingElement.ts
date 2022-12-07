
//two arrays, the one that is in the expected but not in the actual one

import exp from "constants";

// export default function findMissingElements(expArr: string[], actArr: string[]): string[]{
//     let missingArr = []
//     for (const expItem of expArr){
//       if (!actArr.includes(expItem)){
//         missingArr.push(expItem)
//       } 
//     }
//     return missingArr
//   }

  // NEED TO DO IT WITHOUT INCLUDES!!
  export default function findMissingElements(expArr: string[], actArr: string[]){
    const array = []
    for (let item of expArr){
      if (actArr.indexOf(item) === -1){ //if not present in the actual array
        array.push(item)
      }
    }
  return array
}
       