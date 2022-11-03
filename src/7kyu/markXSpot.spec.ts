import markXSpots from './markXSpot'

test("markXSpots given a two dimensional array, return the co-ordinates of x", () => {
    expect(markXSpots([
        ['o', 'o'],
        ['o', 'o']
      ])).toBe([]);
});

test("markXSpots given a two dimensional array, return the co-ordinates of x", () => {
    expect(markXSpots(
        [
            ['x', 'o'],
            ['o', 'o']
          ]
      )).toBe([[0,0]]);
});