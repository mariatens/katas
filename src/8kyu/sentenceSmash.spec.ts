import sentenceSmash from './1-kata'

test("sentenceSmash should take an array of words and smash them into a sentence", () => {
expect(sentenceSmash(["hello", "world"])).toBe("hello world");
});