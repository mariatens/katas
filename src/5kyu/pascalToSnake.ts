//https://www.codewars.com/kata/529b418d533b76924600085d/train/javascript

function toUnderscore(string: any) {
  const arr = [];
  const numbers = "1234567890";
  if (typeof string !== "string") {
    return `${string}`;
  }
  for (let i = 0; i < string.length; i++) {
    if (numbers.includes(string[i])) {
      arr.push(string[i]);
    } else if (
      typeof string[i] === "string" &&
      string[i].toUpperCase() === string[i] &&
      i === 0
    ) {
      arr.push(string[i].toLowerCase());
    } else if (
      typeof string[i] === "string" &&
      string[i].toUpperCase() === string[i]
    ) {
      arr.push("_");
      arr.push(string[i].toLowerCase());
      console.log(string[i], "add underscore");
    } else {
      arr.push(string[i]);
    }
  }
  return arr.join("");
}
