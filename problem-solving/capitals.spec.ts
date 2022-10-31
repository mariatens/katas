import printCapitalsQuiz from './capitals'

const capitals = {
        Afghanistan: "Kabul"
      };

test("", () => {
    expect(printCapitalsQuiz(capitals)).toBe("Of what country is Kabul the capital?: Answer: natsinahgfA");
});