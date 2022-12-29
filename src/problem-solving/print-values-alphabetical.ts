// put object values into array

function printAllValues(obj: { [index: string]: string }): string {
  let arr = Object.values(obj);
  let ordArr = arr.sort().join(", ");
  return ordArr;
}

const capitals = {
  Afghanistan: "Kabul",
  Angola: "Luanda",
  Brazil: "Brasília",
  Canada: "Ottawa",
  China: "Beijing",
  Cuba: "Havana",
  Denmark: "Copenhagen",
  Iceland: "Reykjavík",
  Japan: "Tokyo",
  Kazakhstan: "Astana",
  Mexico: "Mexico City",
  Nigeria: "Abuja",
  Philippines: "Manila",
  Ukraine: "Kiev",
};

console.log(printAllValues(capitals));

//suggestions to do it straight from an object from the internet:
// order an array of objects with name
// users.sort(function (a, b) {
//     if (a.name < b.name) {
//       return -1;
//     }
//     if (a.name > b.name) {
//       return 1;
//     }
//     return 0;
//   });
