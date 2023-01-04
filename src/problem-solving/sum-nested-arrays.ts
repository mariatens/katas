// https://www.notion.so/weareacademy/Sum-nested-arrays-74e3f58890f642439850d7536c1a17b5

type NumberOrNested = number | NumberOrNested[];

// non recursive strategy with stack

function sumNested(nestArr: NumberOrNested[]): number {
  const workStack: NumberOrNested[] = [];
  let sum = 0;
  workStack.push(nestArr);
  while (workStack.length >= 1) {
    let current = workStack.pop()!;
    if (typeof current === "number") {
      sum += current;
    } else {
      workStack.push(...current);
    }
  }
  return sum;
}
