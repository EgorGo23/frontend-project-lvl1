#!/usr/bin/env node

import { userName as user, answer } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const userName = user();

console.log(`Hello, ${userName}`);

const randomInteger = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

const parityСheck = (num) => (num%2 === 0) ? 'yes' : 'no';

let i = 1;

for (i; i <= 3; i++) {
    const randomNum = randomInteger(1, 100);
    console.log(`Question: ${randomNum}`);
    console.log(answer);
    if (answer !== parityСheck(randomNum)) {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${parityСheck(randomNum)}.
        Let's try again, Bill!`);
        break;
    } else {
        console.log('Correct!');
        continue;
    }
}

if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
}

