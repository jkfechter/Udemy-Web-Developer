const p1 = {
    score: 0,
    button: document.querySelector('#player1Scores'),
    display: document.querySelector('#p1ScoreDisplay')
}
const p2 = {
    score: 0,
    button: document.querySelector('#player2Scores'),
    display: document.querySelector('#p2ScoreDisplay')
}
// const player1Btn = document.querySelector('#player1Scores');
// const player2Btn = document.querySelector('#player2Scores');
const resetScore = document.querySelector('#resetScore');
// const p1ScoreDisplay =  document.querySelector('#p1ScoreDisplay');
// const p2ScoreDisplay =  document.querySelector('#p2ScoreDisplay');
const playToSelect = document.querySelector('#playToBtn');


// let p1Score = 0;
// let p2Score = 0;
let maxScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === maxScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
    
}

p1.button.addEventListener('click', function () {
    updateScore(p1, p2)
    // if (!isGameOver) {
    //     p1Score += 1;
    //     if (p1Score === maxScore) {
    //         isGameOver = true;
    //         p1ScoreDisplay.classList.add('has-text-success');
    //         p2ScoreDisplay.classList.add('has-text-danger');
    //         player1Btn.disabled = true;
    //         player2Btn.disabled = true;
    //     }
    //     p1ScoreDisplay.textContent = p1Score;
    // }
})
p2.button.addEventListener('click', function () {
    updateScore(p2, p1)
    // if (!isGameOver) {
    //     p2Score += 1;
    //     if (p2Score === maxScore) {
    //         isGameOver = true;
    //         p2ScoreDisplay.classList.add('has-text-success');
    //         p1ScoreDisplay.classList.add('has-text-danger');
    //         player1Btn.disabled = true;
    //         player2Btn.disabled = true;
    //     }
    //     p2ScoreDisplay.textContent = p2Score;
    // }
})

playToSelect.addEventListener('change', function () {
  maxScore = parseInt(this.value);
  reset();
})

resetScore.addEventListener('click', reset)
function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    // p1.score = 0;
    // p2.score = 0;
    // p1.display.textContent = '0';
    // p2.display.textContent = '0';
    // p2.display.classList.remove('has-text-success', 'has-text-danger');
    // p1.display.classList.remove('has-text-success', 'has-text-danger');
    // p1.button.disabled = false;
    // p2.button.disabled = false; 
}
