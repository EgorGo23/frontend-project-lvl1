import readlineSync from 'readline-sync';

const userName = () => readlineSync.question('May I have your name? ');
const answer = () => readlineSync.question('Your answer: ');

export { userName, answer };
