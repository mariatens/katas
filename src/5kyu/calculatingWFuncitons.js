// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train//javascript
function zero(operatedNumber) {
  if (typeof operatedNumber === "string" && operatedNumber.includes("*")) {
    let number = operatedNumber.split("*");
    return 0 * parseInt(number[1]);
  }
  if (typeof operatedNumber === "string" && operatedNumber.includes("/")) {
    let number = operatedNumber.split("/");
    return Math.floor(0 / parseInt(number[1]));
  } else if (!operatedNumber) {
    return 0;
  } else {
    return 0 + operatedNumber;
  }
}
function one(operatedNumber) {
  if (typeof operatedNumber === "string" && operatedNumber.includes("*")) {
    let number = operatedNumber.split("*");
    return 1 * parseInt(number[1]);
  }
  if (typeof operatedNumber === "string" && operatedNumber.includes("/")) {
    let number = operatedNumber.split("/");
    return Math.floor(1 / parseInt(number[1]));
  } else if (!operatedNumber) {
    return 1;
  } else {
    return 1 + operatedNumber;
  }
}
function two(operatedNumber) {
  if (typeof operatedNumber === "string" && operatedNumber.includes("*")) {
    let number = operatedNumber.split("*");
    return 2 * parseInt(number[1]);
  }
  if (typeof operatedNumber === "string" && operatedNumber.includes("/")) {
    let number = operatedNumber.split("/");
    return Math.floor(2 / parseInt(number[1]));
  } else if (!operatedNumber) {
    return 2;
  } else {
    return 2 + operatedNumber;
  }
}
function three(operatedNumber) {
  if (typeof operatedNumber === "string" && operatedNumber.includes("*")) {
    let number = operatedNumber.split("*");
    return 3 * parseInt(number[1]);
  }
  if (typeof operatedNumber === "string" && operatedNumber.includes("/")) {
    let number = operatedNumber.split("/");
    return Math.floor(3 / parseInt(number[1]));
  } else if (!operatedNumber) {
    return 3;
  } else {
    return 3 + operatedNumber;
  }
}
function four(operatedNumber) {
  if (typeof operatedNumber === "string" && operatedNumber.includes("*")) {
    let number = operatedNumber.split("*");
    return 4 * parseInt(number[1]);
  }
  if (typeof operatedNumber === "string" && operatedNumber.includes("/")) {
    let number = operatedNumber.split("/");
    return Math.floor(4 / parseInt(number[1]));
  } else if (!operatedNumber) {
    return 4;
  } else {
    return 4 + operatedNumber;
  }
}
function five(operatedNumber) {
  if (typeof operatedNumber === "string" && operatedNumber.includes("*")) {
    let number = operatedNumber.split("*");
    return 5 * parseInt(number[1]);
  }
  if (typeof operatedNumber === "string" && operatedNumber.includes("/")) {
    let number = operatedNumber.split("/");
    return Math.floor(5 / parseInt(number[1]));
  } else if (!operatedNumber) {
    return 5;
  } else {
    return 5 + operatedNumber;
  }
}
function six(operatedNumber) {
  if (typeof operatedNumber === "string" && operatedNumber.includes("*")) {
    let number = operatedNumber.split("*");
    return 6 * parseInt(number[1]);
  }
  if (typeof operatedNumber === "string" && operatedNumber.includes("/")) {
    let number = operatedNumber.split("/");
    return Math.floor(6 / parseInt(number[1]));
  } else if (!operatedNumber) {
    return 6;
  } else {
    return 6 + operatedNumber;
  }
}
function seven(operatedNumber) {
  if (typeof operatedNumber === "string" && operatedNumber.includes("*")) {
    let number = operatedNumber.split("*");
    return 7 * parseInt(number[1]);
  }
  if (typeof operatedNumber === "string" && operatedNumber.includes("/")) {
    let number = operatedNumber.split("/");
    number = 7 / parseInt(number[1]);
    return Math.floor(number);
  } else if (!operatedNumber) {
    return 7;
  } else {
    return 7 + operatedNumber;
  }
}

function eight(operatedNumber) {
  if (typeof operatedNumber === "string" && operatedNumber.includes("*")) {
    let number = operatedNumber.split("*");
    return 8 * parseInt(number[1]);
  }
  if (typeof operatedNumber === "string" && operatedNumber.includes("/")) {
    let number = operatedNumber.split("/");
    return Math.floor(8 / parseInt(number[1]));
  } else if (!operatedNumber) {
    return 8;
  } else {
    return 8 + operatedNumber;
  }
}
function nine(operatedNumber) {
  if (typeof operatedNumber === "string" && operatedNumber.includes("*")) {
    let number = operatedNumber.split("*");
    return 9 * parseInt(number[1]);
  }
  if (typeof operatedNumber === "string" && operatedNumber.includes("/")) {
    let number = operatedNumber.split("/");
    return Math.floor(9 / parseInt(number[1]));
  } else if (!operatedNumber) {
    return 9;
  } else {
    return 9 + operatedNumber;
  }
}
function plus(number) {
  return +number;
}
function minus(number) {
  return -number;
}
function times(number) {
  return "*" + number;
}
function dividedBy(number) {
  return "/" + number;
}

// simpler way of solving it
// function zero(fn) {return fn ? fn(0) : 0}
// function one(fn) {return fn ? fn(1) : 1}
// function two(fn) {return fn ? fn(2) : 2}
// function three(fn) {return fn ? fn(3) : 3}
// function four(fn) {return fn ? fn(4) : 4}
// function five(fn) {return fn ? fn(5) : 5}
// function six(fn) {return fn ? fn(6) : 6}
// function seven(fn) {return fn ? fn(7) : 7}
// function eight(fn) {return fn ? fn(8) : 8}
// function nine(fn) {return fn ? fn(9) : 9}

// function plus(n) {return function(v) {return v + n}}
// function minus(n) {return function(v) {return v - n}}
// function times(n) {return function(v) {return v * n}}
// function dividedBy(n) {return function(v) {return v / n}}
