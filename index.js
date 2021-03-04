let max = parseInt(prompt("Enter max num!"));
while (!max) {
    max= parseInt(prompt("Enter a valid Number!"));


}

let targetNum = Math.floor(Math.random() * max) + 1

console.log(targetNum)

let guess = prompt("Enter your first guess");

let attempts = 1;

while (+guess !== targetNum) {
    if (guess=='q') {
        break;
    }
    attempts++;
    if (+guess > targetNum) {
        guess = prompt("too high guess again");
    } else {
        guess = prompt("too low guess again");
    }

}

if (guess === 'q') console.log("ok you quit") 
else console.log(`you got it. took you ${attempts} guesses`);

