import printCapitalsQuiz from "./capitals";

const capitals = {
  Afghanistan: "Kabul",
  Angola: "Luanda",
};

test("", () => {
  expect(printCapitalsQuiz(capitals)).toBe(
    "Of what country is Kabul the capital?: Answer: natsinahgfA Of what country is Luanda the capital?: Answer: alognA"
  );
});
