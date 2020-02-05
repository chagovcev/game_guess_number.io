'use strict'
let randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);

let guessNumber = function(){
    
    let userInput = prompt('Угадай число от 1 до 100');

        if(userInput){
            let myV = Number(userInput);
                
            if(myV === randomNumber){
                alert('Угадал');
                let repite = confirm('Хотите сыграть еще?')
                if (repite === true){
                    guessNumber();
                }
                
            }
            else if(myV > randomNumber) {
                alert('Загаданное число меньше');
                guessNumber();
            }
            else if(myV < randomNumber) {
                alert('Загаданное число больше');
                guessNumber();
            }
        }
    
}
guessNumber();
