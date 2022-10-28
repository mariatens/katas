import markXSpots from './markXSpot'

test("markXSpots given a two dimensional array, return the co-ordinates of x", () => {
    expect(markXSpots(['o','x'])).toBe(1);
});