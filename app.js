let b = document.querySelector("#b");
let a = document.querySelector('#a');
let reset = document.querySelector('#reset');
let h1 = document.querySelector('h1');
let maxselect = document.querySelector('#maxscore');
let adisplay = document.querySelector('#playera');
let bdisplay = document.querySelector('#playerb');



let gameOver = false;
let bscore = 0;
let ascore = 0;
let maxscore = 5;



b.addEventListener('click', function() {
    bscore += 1;
    if (bscore == maxscore) {
        gameOver = true;
    }
    adisplay.innerText = ascore;
    bdisplay.innerText = bscore;
    if (gameOver === true) {
        a.disabled = true;
        b.disabled = true;
        console.log(adisplay.classList)
        adisplay.classList.add('has-text-danger');
        bdisplay.classList.add('has-text-success')

    }
})

a.addEventListener('click', function() {
    ascore += 1;
    if (ascore == maxscore) {
        gameOver = true;
    }
    adisplay.innerText = ascore;
    bdisplay.innerText = bscore;
    if (gameOver === true) {
        a.disabled = true;
        b.disabled = true;
        adisplay.classList.add('has-text-success');
        bdisplay.classList.add('has-text-danger')
    }
})

reset.addEventListener('click', function() {
    ascore = 0;
    bscore = 0;
    gameOver = false;
    a.disabled = false;
    b.disabled = false;
    h1.innerHTML = '<span id="playerb">0</span> to <span id="playera">0</span>';
    adisplay = document.querySelector('#playera');
    bdisplay = document.querySelector('#playerb');

})

maxselect.addEventListener('input', function() {
    maxscore = maxselect.value;
    console.log(maxselect);
});