import findCutNumbers from "./findCutNumbers";

test("sum adds two numbers", () => {
  expect(findCutNumbers([20, 10, "cut", -2, 1, "cut", 4, "cut", -3])).toEqual([10,-2,1]);
});

test("sum adds two numbers", () => {
  expect(findCutNumbers(["cut", 2, 10, 2, "cut"])).toEqual([2]);
});
