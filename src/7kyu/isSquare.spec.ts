import isSquare from './isSquare'

test("isSquare should tell if a number is a squared number", () => {
    expect(isSquare(25)).toBe(true);
});