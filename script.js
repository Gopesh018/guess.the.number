let ranNumber = parseInt((Math.random() * 100) + 1);
console.log(ranNumber);

let guessinput = document.getElementById('guessinput');

const button = document.querySelector("input[type = button]");

let guessVal = [];
let guessValSpan = document.querySelector('.display-box p:nth-child(2) span');


let remainingGuess = 1;
let remain = document.querySelector('.display-box p:nth-child(3) span');
let msg = document.querySelector('.display-box h2');
let hinter = document.querySelector('.hinter');
let playAgain = 'Play Again';
let playGame = true;

button.addEventListener('click', (btn) => {
    btn.preventDefault()
    let guessinputVal = guessinput.value;

    if (playGame) {
        if (guessinputVal > 100 || guessinputVal < 1) {
            alert('Please enter a number between 1 to 100')
            guessinput.value = '';
        }
        else if (ranNumber == guessinputVal) {
            msg.innerHTML = 'WooHoo! Your Guess Is Correct';
            hinter.innerHTML = '';
            remain.innerHTML = `${remain.innerHTML - remainingGuess}`;
            button.value = playAgain;
            playGame = false;
        }
        else if (remain.innerHTML != 0) {
            guessVal.push(guessinputVal);
            guessValSpan.innerHTML = guessVal;
            remain.innerHTML = `${remain.innerHTML - remainingGuess}`;
            guessinput.value = '';

            if (guessinputVal > ranNumber) {
                hinter.innerHTML = 'Your guess was bigger than exact number'
            } else if (guessinputVal < ranNumber) {
                hinter.innerHTML = 'Your guess was smaller than exact number'
            }
        }
        else if (remain.textContent < 1) {
            msg.innerHTML = 'Ohhh! You lose the game';
            button.value = 'Play Again';
            button.value = playAgain;
            hinter.innerHTML = '';
            playGame = false;
            ranNumber = parseInt((Math.random() * 100) + 1);
            console.log(ranNumber);
        }
    }
    else if (button.value === playAgain) {
        playGame = true;
        remain.innerHTML = '10';
        msg.innerHTML = '';
        hinter.innerHTML = '';
        guessinput.value = '';
        button.value = 'Submit';
        guessVal = [];
        guessValSpan.innerHTML = '';
        ranNumber = parseInt((Math.random() * 100) + 1);
        console.log(ranNumber);
    }
});
