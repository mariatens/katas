import pairStrings from './pairStrings'

test("pairStrings ", () => {
    expect(pairStrings("abc*def")).toBe("adbecf");
});