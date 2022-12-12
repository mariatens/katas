export default function findCutNumbers(array: unknown[]){
    const pool =[]
    const report = []
    for (let item of array){
      if (typeof item === 'number'){
        pool.push(item)
      }
      if (item === 'cut'){
        if (pool.length > 0 ){
        let min = Math.min(...pool)
        report.push(min)
        let index = pool.indexOf(min)
        pool.splice(index, 1)
        }
      }
      console.log(pool)
    }
    return report
  }