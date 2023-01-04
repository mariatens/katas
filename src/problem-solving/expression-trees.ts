// https://www.notion.so/weareacademy/Evaluate-expression-trees-8ca6e97836dc42ba949a6e8b261378d3

type Operator = "add" | "subtract" | "divide" | "multiply";

type Expression = number | { op: Operator; a: Expression; b: Expression };

export function evaluate(exp: Expression): number {
  if (typeof exp === "number") {
    return exp;
  }
  return calculate(exp.op, evaluate(exp.a), evaluate(exp.b));
}

function calculate(op: Operator, a: number, b: number): number {
  if (op === "add") {
    return a + b;
  }
  if (op === "subtract") {
    return a - b;
  }
  if (op === "divide") {
    return a / b;
  } else {
    return a * b;
  }
}

//What number does the example expression tree above evaluate to?
// 20

const tree1 = 7;
const tree2 = { op: "multiply", a: 3, b: 4 };
const tree3 = {
  op: "multiply",
  a: { op: "sum", a: 1, b: 3 },
  b: { op: "subtract", a: 7, b: { op: "subtract", a: 20, b: 18 } },
};
