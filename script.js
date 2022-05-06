'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;
console.log(secretNumber); 

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', () => {

    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    console.log(typeof guess);

    // When there is no input
    if (!guess) {
        displayMessage('No number!');
    // When player wins
    } else if (secretNumber === guess) {
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        
        // if (score > highscore) {
        //     highscore = score;
        //     document.querySelector('.highscore').textContent = highscore;
        // }
        
        highscore += score;
        document.querySelector('.highscore').textContent = highscore;
    // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high...': 'Too Low...');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
    // // When guess is too high
    // } else if (guess > secretNumber) {
    // // When guess is too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too Low...';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }

});


document.querySelector('.again').addEventListener('click', () => {

    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    
});

