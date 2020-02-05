'use strict'
let randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);

let guessNumber = function(){
    
    let userInput = prompt('Угадай');

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
                alert('Больше');
                guessNumber();
            }
            else if(myV < randomNumber) {
                alert('Меньше');
                guessNumber();
            }
        }
    
}
guessNumber();
