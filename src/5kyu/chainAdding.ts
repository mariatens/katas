// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/javascript

//title: 

function add(n: number){
    function func (x: number){
      return add(n + x)
    }
    func.valueOf = () => n
    return func
  }