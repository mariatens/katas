function validParentheses(parentheses: string) {
  let tracer = [];
  for (let i = 0; i < parentheses.length; i++) {
    if (parentheses[i] === "(") {
      tracer.push("(");
    } else {
      if (tracer.length == 0) {
        return false;
      }
      let lastValue = tracer[tracer.length - 1];
      if (parentheses[i] === ")" && lastValue === "(") {
        tracer.pop();
      } else {
        break;
      }
    }
  }
  return tracer.length === 0;
}

//other way :
/*
  function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  
  return n == 0;
}
  */
