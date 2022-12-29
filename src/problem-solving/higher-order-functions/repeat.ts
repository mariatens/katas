function repeat(n: number, callbackFn: Function): undefined {
  for (let i = 0; i <= n; i++) {
    callbackFn();
  }
  return undefined;
}
function hello() {
  return "hello";
}

console.log(repeat(2, hello));
