
function pushFunction(arr:number[]){
        return arr.push(1)
}
function unshiftFunction(arr: number[], num : number){
        arr.unshift(1)
}

//array.push and array.unshift

// const startTime = performance.now();
// unshiftFunction(1000000);
// const stopTime = performance.now();
// const elapsedTime = stopTime - startTime;

// console.log({elapsedTime});





// array.pop and shift 
function prepareYourInputArr(num: number){
    const arr = []
    for (let i = 0; i<=num;i++){
        arr.push(1)
    }
    return arr
}   

function popFunction(arr: number[]){
        arr.pop()
}

function shiftFunction(arr: number[]){
        arr.shift()
}

// const inputArr = prepareYourInputArr(10_000_000)
// const startTime = performance.now();
// shiftFunction(inputArr);
// const stopTime = performance.now();
// const elapsedTime = stopTime - startTime;

// console.log({elapsedTime});

// timeIt
// function timeIt(fn: any, arg: any){
//     const startTime = performance.now();
//     fn(arg)
//     const stopTime = performance.now();
//     const elapsedTime = stopTime - startTime;
//     return elapsedTime
// }
const inputArr = prepareYourInputArr(10)

// console.log(timeIt(pushFunction, inputArr))

//timeItAvg

function timeItAvg(fn: any, arg: any, repetition: number){
    const timeArr=[]
    for (let i = 0; i <repetition; i++){
    const startTime = performance.now();
    fn(arg)
    const stopTime = performance.now();
    timeArr.push(stopTime - startTime);
}
    const totalMs = timeArr.reduce((a,b)=>a+b, 0)

    return totalMs/repetition
}

console.log(timeItAvg(pushFunction, inputArr, 10))
