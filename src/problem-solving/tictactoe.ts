//https://www.notion.so/weareacademy/Detect-wins-in-TicTacToe-4712542a32474e64924606a468794789

type Player = "X"|"O"|null

type BoardState = [
    [Player, Player, Player], 
    [Player,Player,Player], 
    [Player,Player,Player]
]


type WinStatus = "there was a draw"|"the game has not been finished yet"|"X won"|"O won"



function calcWinState(boardState: BoardState): WinStatus{
    // if all of the subarray values are the same - won
    if (boardState[0].every(el => 
        el === boardState[0][0]
    )){
        return "X won"
    }
    else if (boardState[1].every(el => 
        el === boardState[0][0]
    )){
        return "X won"
    }
    else if (boardState[2].every(el => 
        el === boardState[0][0]
    )){
        return "X won"
    }
    // if the same index in all subarrays are the same -won
        return ""
     
    // if subarray 0 and 2 diagonals (sub1index0, sub2index1, sub3index3, are the same - won
}

const example: BoardState = [
    ["X", "X", "X"], 
    ["X","X","X"], 
    ["X","X","X"]
]

console.log(calcWinState(example))

