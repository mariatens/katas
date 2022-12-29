import markXSpots from "./markXSpot";

test("markXSpots given a two dimensional array, return the co-ordinates of x", () => {
  expect(
    markXSpots([
      ["o", "o"],
      ["o", "o"],
    ])
  ).toStrictEqual([]);
});
//need that because it's comparing arrays

test("markXSpots given a two dimensional array, return the co-ordinates of x", () => {
  expect(
    markXSpots([
      ["x", "o"],
      ["o", "o"],
    ])
  ).toStrictEqual([[0, 0]]);
});
