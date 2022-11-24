type Player2 = "X" | "O"
type PosState = Player | ""

type BoardState2 = [
    PosState,PosState,PosState,
    PosState,PosState,PosState,
    PosState,PosState,PosState
]
// type WinState = {state: "draw"} | { state: "not finished"} | {state:"won", winner:Player}
type WinState = "draw" | "X won" | "O won" | "not finished"

function whoWins(element: PosState): WinState{
    if (element==="X" ){
        return "X won"
    }else if(element==="O"){
        return "O won"
    }
    else{
        return "not finished"
    }
}

function ticatactoe(board: BoardState2): WinState{
    let result: WinState = "not finished"
    for (let i  = 0; i < 9; i+=3){
        if (board[i] === board[i+1] && board[i] === board[i+2]){
           result =  whoWins(board[i])
        }       
    }
    for (let i  = 0; i < 3; i++){
        if (board[i] === board[i+3] && board[i] === board[i+6]){
        result= whoWins(board[i])
        }
    }
    if ((board[0] === board[4] && board[0] === board[8])||(board[2] === board[4] && board[2] === board[6])){
        result= whoWins(board[4])
    }  
    if (result !== "X won" && result !== "O won"){
        if(board.includes('')=== false){
            result = "draw"
        }else{
            result ="not finished"
        }   
    }
    else{
        return result
    }
    return result
}

console.log(ticatactoe(["O", "O", "X", 
                            "X", "X", "O", 
                            "O","X",""]))

console.log(ticatactoe(["", "", "", 
                            "", "", "", 
                            "","",""]))                      




// function tictactoe(board: BoardState2): WinState{
//     ticatactoe(board)
//     if(board.includes('')=== false){
//         return "draw"
//     }else{
//         return "not finished"
//     }
// } 

// function checkHorizontal(board: BoardState2): WinState{
//     for (let i  = 0; i < 9; i+=3){
//         if (board[i] === board[i+1] && board[i] === board[i+2]){
//            return whoWins(board[i])
//         }
//         else{
//           break 
//         }
//     }
// }

// function checkVertical(board: BoardState2): WinState{
//     for (let i  = 0; i < 3; i++){
//         if (board[i] === board[i+3] && board[i] === board[i+6]){
//             return whoWins(board[i])
//     }
//         else{
//             break
//         }
//     }
// }

// function checkDiagonal(board: BoardState2): WinState{
//         if ((board[0] === board[4] && board[0] === board[8])||(board[2] === board[4] && board[2] === board[6])){
//             return whoWins(board[4])
//         }
//     }
