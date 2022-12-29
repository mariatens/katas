import simpPairStrings from "./simpler-pairStrings";

test("pairStrings ", () => {
  expect(simpPairStrings("abc*def")).toBe("adbecf");
});
