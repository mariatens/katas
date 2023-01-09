function validBraces(braces: string) {
  let tracer = [];
  for (let i = 0; i < braces.length; i++) {
    if (braces[i] === "(" || braces[i] === "{" || braces[i] === "[") {
      //if starting with opening, push, it's good signal
      tracer.push(braces[i]);
    } else {
      if (tracer.length === 0) {
        return false;
      } // if we are on i 0 and it wasn't opening, we're already out

      let lastValue = tracer[tracer.length - 1];

      if (
        (braces[i] === "]" && lastValue === "[") || //if we go to the next one and it matches the value we added before
        (braces[i] === "}" && lastValue === "{") ||
        (braces[i] === ")" && lastValue === "(")
      ) {
        tracer.pop(); //we take out the opening bracket to be able to start again checking
      } else {
        break; //if it doesn't match it we're out of the loop
      }
    }
  }
  return tracer.length === 0;
}

//other ways of doing it:
/*
 function validBraces(braces){
  let matches = { '(':')', '{':'}', '[':']' };
  let stack = [];
  let currentChar;

  for (let i=0; i<braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}
 
 
  */
