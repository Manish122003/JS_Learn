let randomNo = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaning = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if (isNaN(guess)){
        alert('Please enter a number');
    }else if (guess < 1){
        alert('Please enter a number between 1 and 100');
    }else if(guess > 100){
        alert('Please enter a number between 1 and 100');
    }else{
        prevGuess.push(guess);
        if (numGuess === 11){
            displayGuess(guess)
            displayMsg(`Game Over. Random number was ${randomNo}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if (guess === randomNo){
        displayMsg(`You guessed it right`)
        endGame();

    }else if(guess < randomNo){
        displayMsg(`Your number is too low`)
    }else if(guess > randomNo){
        displayMsg(`Your number is too high`)
    }
}

function displayGuess(guess){
    userInput.value = '' ;
    guessSlot.innerHTML += `${guess}, ` ;
    numGuess++;
    remaning.innerHTML = `${11 - numGuess}`
}

function displayMsg(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNo = parseInt(Math.random()*100+1);
        prevGuess = [];
        numGuess = 0 ;
        guessSlot.innerHTML = '';
        remaning.innerHTML = '11';
        userInput.removeAttribute('disabled');
        lowOrHigh.innerHTML = '';
        startOver.removeChild(p);
        playGame = true;
    })
}

function endGame(){
    userInput.value = "";
    userInput.setAttribute('disabled',"");
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}