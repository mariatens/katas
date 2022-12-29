//https://www.codewars.com/kata/58e24788e24ddee28e000053/train/javascript

// this may not work because it can create a and b at the same time
// trying to simplify it
function simpleAssembler(program) {
  for (step of program) {
    let splitStep = step.split(" ");
    if (splitStep.includes("mov") && splitStep.includes("a")) {
      let a = step[2];
      if (splitStep.includes("inc")) {
        a++;
      } else if (splitStep.includes("dec")) {
        a--;
      } else if (splitStep.includes("jnz") && a != 0) {
      }
    } else if (splitStep.includes("mov") && splitStep.includes("b")) {
      let b = step[2];
      if (splitStep.includes("inc")) {
        b++;
      } else if (splitStep.includes("dec")) {
        b--;
      } else if (splitStep.includes("jnz") && b != 0) {
        // how to say go to the previous instruction?
      }
    }
  }
  return { a: a, b: b }; //how to say include it if it exists
}

// function simpleAssembler(program){
//     let a = 0
//     for (step of program){
//         splitStep = step.split(' ')
//         if (splitStep.includes('mov') && splitStep.includes('a')){
//             a = step[2]
//         }
//         else if (splitStep.includes('mov') && splitStep.includes('b')){
//             b = step[2]
//         }
//         else if (step.includes('inc')&& splitStep.includes('b')){
//             b ++
//         }
//         else if (step.includes('inc')&& splitStep.includes('a')){
//             a ++
//         }
//         else if (step.includes('dec')&& splitStep.includes('a')){
//             a--
//         }
//         else if (step.includes('dec')&& splitStep.includes('b')){
//             b--
//         }

//     }
// }

// function simpleAssembler(program){
//         let splitStep = program[0].split(' ')
//         let a = splitStep[2]
//         let inst = 0
//         for (let [index,step] of program.entries()){
//             if (step.includes('inc')){
//                 a ++
//             }
//             else if (step.includes('dec')){
//                 a--
//             }
//             else if (step.includes('jnz') && a != 0){
//                 if (step[6] === "-"){
//                      inst = index - step[7]
//                 }
//                 else{
//                     inst = index + step[6]
//                 }// don't understand decrease its value until 0
//                 //step[2] is the number located in the jnz instruction
//                 if (program[inst].includes('inc')){
//                     a ++
//                 }
//                 else if (program[inst].includes('dec')){
//                     a--
//                 }
//             }
//         }
//     return a
// }

console.log(
  simpleAssembler(["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"])
);
