// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

function isSquare(num: number): boolean {
    let sq = Math.sqrt(num)
    if (sq - Math.floor(sq) !== 0){
        return false
    }
    else {
        return true
    }
}

// simpler solution from codewars
// function isSquare(n) {
//     return Math.sqrt(n) % 1 === 0;
//   }

export default isSquare