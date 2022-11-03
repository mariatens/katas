const characters = {
    Bruce: "Hulk",
    Peter: "Spiderman",
    Ororo: "Storm"
  };

// print keys and values
function printKeysValues(obj){
    for (let pair in obj){
        console.log(`${pair} ${obj[pair]}`)
    }
}

console.log(printKeysValues(characters))

// you can also do:
function printKeysValuesEasy(obj){
    for (let [key, value] of Object.entries(obj)){
        console.log(`${key} ${value}`)
    }
}

console.log(printKeysValuesEasy(characters))

//print only keys
// console.log(Object.keys(characters).join(', '))

//print only values 
//can also do Object.values(obj)
//this prints it as an array

//add keys and values to object
// with function
function addKeys(obj){
   obj["Juana"] = "Ten" 
   console.log(obj)
}
console.log(addKeys(characters))
//just with variable declaration

characters["Pepa"] = "Jimenez"
console.log(characters)


//modify keys to object
const obj = {oldKey: 'value'};

obj['newKey'] = obj['oldKey'];
delete obj['oldKey'];

//modify values to object
const merge = Object.assign(target, newRecord);
// other ways
// let pair = {Juana: "Perez"};
//     obj = {...obj, ...pair};
// let obj = {key1: "value1", key2: "value2"};
// Object.assign(obj, {key3: "value3"});

