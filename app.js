
const playera = {
    score: 0,
    button: document.querySelector("#a"),
    display: document.querySelector("#playera")
}
const playerb = {
    score: 0,
    button: document.querySelector("#b"),
    display: document.querySelector("#playerb")
}
const playerList = [playera, playerb];


let maxscore = +document.querySelector("#maxscore > [selected]").innerHTML;
let maxselect = document.querySelector('#maxscore');

for (let player of playerList) {
    player.button.addEventListener('click', function() {
        changeScore(player);
    });
}

function changeScore(player) {
    player.score += 1;
    player.display.innerHTML = player.score;
    if (player.score == maxscore) {
        for (player of playerList) {
            player.button.disabled = true;
            player.display.classList.add('has-text-danger');
        }
        player.display.classList.remove('has-text-danger');
        player.display.classList.add('has-text-success');
    }
}

document.querySelector('#reset').addEventListener('click', function() {
    for (player of playerList) {
        player.button.disabled = false;
        player.score = 0;
        player.display.classList.remove('has-text-danger', 'has-text-success');
        player.display.innerText = "0";
    }
});

document.querySelector('#maxscore').addEventListener('input', function() {
    maxscore = maxselect.value;
});