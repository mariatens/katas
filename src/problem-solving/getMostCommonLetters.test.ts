import getMostCommonLetters from "./getMostCommonLetters";

test("", () => {
  expect(getMostCommonLetters("hello", 3)).toEqual([
    ["l", 2],
    ["h", 1],
    ["e", 1],
    ["o", 1],
  ]);
});
