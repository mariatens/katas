import findMissingElements from "./findMissingElement";

test("", () => {
  expect(findMissingElements(["hello", "bye"], ["hello"])).toEqual(["bye"]);
});

test("", () => {
  expect(findMissingElements(["h", ""], [])).toEqual(["h", ""]);
});
