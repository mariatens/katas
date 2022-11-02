//https://www.codewars.com/kata/58e24788e24ddee28e000053/train/javascript

function simpleAssembler(program){
        let splitStep = program[0].split(' ')
        let a = splitStep[2]
        for (let step of program){
            if (step.includes('inc')){
                a ++
            }
            else if (step.includes('dec')){
                a--
            }
            else if (step.includes('jnz') && a != 0){
                //let inst = index of step - step[2]
                if (inst.includes('inc')){
                    a ++
                }
                else if (inst.includes('dec')){
                    a--
                }
            }
        }

        }