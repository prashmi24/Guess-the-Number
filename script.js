const userInput =document.querySelector('input');
const form=document.querySelector('form');
let randomNum = Math.round(Math.random()*100);
const result = document.querySelector('.result');
const guesses =document.querySelector('.all-guesses');
const guessesArray = []

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const userInputValue= parseInt(userInput.value)
    if(userInputValue < randomNum){
        result.innerText= 'Too low!';
    }
    else if(userInputValue > randomNum){
        result.innerText = 'Too High!';
    }
    else{
        result.innerText='You won!';
    }
    guessesArray.push(userInputValue)
    guesses.innerText = 'Your guesses : ' + guessesArray.join(', ')
    form.reset();

})
