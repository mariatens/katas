import sentenceSmash from "./sentenceSmash";

test("sentenceSmash should take an array of words and smash them into a sentence", () => {
  expect(sentenceSmash(["hello", "world"])).toBe("hello world");
});
