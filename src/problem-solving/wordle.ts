export function wordle(guessWord: string, solutionWord: string): string[]{
    let solutionArray = solutionWord.split("") //split into array
    let guessStyle = new Array(5).fill('grey'); //initial grey array
            solutionArray.forEach( (letter, i) => { //for each letter of the solution
                if(guessWord[i] === letter ){ //if the letter of the guessed word is the same as the one from solution
                    guessStyle[i] = 'green';//fill the style as green in the position
                    solutionArray[i] = ''; //delete the letter from the solution array
                }
            });

            for(let i=0; i < guessWord.length; i++){

                if (solutionArray.includes(guessWord[i])){ //if the solution includes the letter in that index
                    guessStyle[i] = 'yellow'; //make it yellow
                    const indexOfLetterInSolution = solutionArray.indexOf(guessWord[i])
                    solutionArray[indexOfLetterInSolution] = ''; //take it out
                }
            }
        return guessStyle;
    }