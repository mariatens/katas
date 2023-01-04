// https://www.notion.so/weareacademy/Sum-nested-arrays-74e3f58890f642439850d7536c1a17b5

type NumberOrNested = number | NumberOrNested[]

// non recursive strategy with stack

function sumNested(nestArr : NumberOrNested[]): number{
  const workStack = []
  let sum = 0
  for (let element of nestArr){
    workStack.push(element)
    while (workStack.length >= 1) {
        let currentNumber = workStack.pop() as NumberOrNested
        if (typeof currentNumber === "number"){
            sum += currentNumber
        }
        else{
            for (let subelement of currentNumber){
                workStack.push(subelement)
            }
        }    
    }
  }
    return sum
}
