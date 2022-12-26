function collect<T>(numTimes: number, callbackFn: Function): T[]{
    const resArr:T[] = []
    for (let i =0;  i<= numTimes; i++){
        let result = callbackFn()
        resArr.push(result)
    }
    return resArr
}
// callback function:
function createStar(){
    return { 
      pos: { x: Math.random(), y: Math.random() },
      speed: Math.random()
    }
  }
function hola(){
    return "hola"
}
console.log(collect(3, hola))




