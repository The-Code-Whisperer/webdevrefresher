let max = parseInt(prompt("Enter max num!"));
while (!max) {
    max= parseInt(prompt("Enter a valid Number!"));


}

const targetNum = Math.floor(Math.random() * max) + 1

let guess = prompt("Enter your first guess");

console.log(guesss)

let attempts = 1;

while (guess !== targetNum) {
    if (guess=='q') {
        break;
    }
    console.log('wtf')
    attempts++;
    if (guess > targetNum) {
        guess = prompt("too high guess again");
    } else {
        guess = prompt("too low guess again");
    }

}
console.log(`you got it. took you ${attempts} guesses`);