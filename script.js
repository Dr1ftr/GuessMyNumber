'use strict';
let givenMax = 20
let goal = randomGoal(givenMax)
let score = 20
let highscore = 0;


function textFieldContent(field, message) {
    document.querySelector(field).textContent = message
}

function randomGoal($max) {
    let $result = Math.trunc(Math.random() * $max)
    return $result
}

function reset() {
    textFieldContent('.number', '?')
    textFieldContent('.message', 'Start guessing...')
    textFieldContent('.score', '20')
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    goal =  randomGoal(givenMax)
    score = 20;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess)

    if (!guess) {
        document.querySelector('.message').textContent = 'No number'
    } else if(guess === goal){
        textFieldContent('.message', 'Correct number');
        textFieldContent('.number', goal)
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score > highscore){highscore = score; textFieldContent('.highscore', score)}
    } else if (guess !== goal) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > goal ? 'Lower' : 'higher';
            textFieldContent('.score', score)
            --score
        } else {
            textFieldContent('.message', 'Bust')
            textFieldContent('.score', 0);
            textFieldContent('.number', goal);
            document.querySelector('body').style.backgroundColor = '#EC2C02';
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    reset()
})
document.querySelector('.reload').addEventListener('click', function () {
    reset()
    givenMax = document.querySelector('.betweenNumber').value;
})

console.log(givenMax)

