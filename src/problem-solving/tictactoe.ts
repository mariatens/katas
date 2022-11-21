//https://www.notion.so/weareacademy/Detect-wins-in-TicTacToe-4712542a32474e64924606a468794789

type Player = "X"|"O"

type BoardState = [
    [Player, Player, Player], 
    [Player,Player,Player], 
    [Player,Player,Player]
]

 const WinStatus = {
    draw: "there was a draw",
    notFinished: "the game has not been finished yet",
    won: "player won"
}
function calcWinState(boardState: BoardState): string{
    // if all of the subarray values are the same - won
    if (boardState[0].every(el => 
        el === boardState[0][0]
    )){
        return WinStatus.won 
    }
    else if (boardState[1].every(el => 
        el === boardState[0][0]
    )){
        return WinStatus.won 
    }
    else if (boardState[2].every(el => 
        el === boardState[0][0]
    )){
        return WinStatus.won 
    }
    // if the same index in all subarrays are the same -won}
        return "else"
     
    // if subarray 0 and 2 diagonals (sub1index0, sub2index1, sub3index3, are the same - won
}

const example: BoardState = [
    ["X", "X", "X"], 
    ["X","X","X"], 
    ["X","X","X"]
]

console.log(calcWinState(example))

