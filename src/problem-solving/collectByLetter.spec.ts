import collectByLetter from "./collectByLetter"

let words = ["shall", "i", "compare", "thee", "to", "a", "summer's"]

test("", () => {
    expect(collectByLetter(words)).toBe({s: ["shall", "summers"],c: ["compare"],t: ["thee", "to"],i: ["i"],a: ["a"],});
});