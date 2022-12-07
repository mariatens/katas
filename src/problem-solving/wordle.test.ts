import {wordle} from './wordle'

test("Marks wordle guesses", () => {

    expect(wordle("HELLO", "HEOSL")).toStrictEqual(['green','green', 'yellow','grey', 'yellow'])
    // expect(wordle("", "")).toStrictEqual([])
    // expect(wordle(, )).toStrictEqual([])
    // expect(wordle(, )).toStrictEqual([])

})