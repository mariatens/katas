//https://www.codewars.com/kata/58e24788e24ddee28e000053/train/javascript

function simpleAssembler(program){
        let splitStep = program[0].split(' ')
        let a = splitStep[2]
        let inst = 0
        for (let [index,step] of program.entries()){
            if (step.includes('inc')){
                a ++
            }
            else if (step.includes('dec')){
                a--
            }
            else if (step.includes('jnz') && a != 0){
                if (step[6] === "-"){
                     inst = index - step[7] 
                }
                else{
                    inst = index + step[6]
                }// don't understand decrease its value until 0
                //step[2] is the number located in the jnz instruction
                if (program[inst].includes('inc')){
                    a ++
                }
                else if (program[inst].includes('dec')){
                    a--
                }
            }
        }
    return a
}

console.log(simpleAssembler(["mov a 5", "inc a", "dec a", "dec a", "jnz a -1", "inc a"]))