import collectByLetter from "./collectByLetter"

let words = ["shall", "i", "compare", "thee", "to", "a", "summers"]

test("", () => {
    expect(collectByLetter(words)).toEqual({s: ["shall", "summers"],c: ["compare"],t: ["thee", "to"],i: ["i"],a: ["a"]});
});