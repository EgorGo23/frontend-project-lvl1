import readlineSync from 'readline-sync';
import brainEven from './brainEven';
import brainCalc from './brainCalc';
import brainGcd from './brainGcd';
import brainProgression from './brainProgression';
import brainPrime from './brainPrime';

const userName = () => readlineSync.question('May I have your name? ');

const userResponse = () => readlineSync.question('Your answer: ');

const functionManager = (gameName) => {
  let objectManager;

  if (gameName === 'brain-even') {
    objectManager = brainEven();
  }
  if (gameName === 'brain-calc') {
    objectManager = brainCalc();
  }
  if (gameName === 'brain-gcd') {
    objectManager = brainGcd();
  }
  if (gameName === 'brain-progression') {
    objectManager = brainProgression();
  }
  if (gameName === 'brain-prime') {
    objectManager = brainPrime();
  }

  return objectManager;
};

const brainGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const { greeting } = functionManager(game);
  console.log(greeting);

  const name = userName();
  console.log(`Hello, ${name}`);

  let i = 0;
  while (i < 3) {
    const data = functionManager(game);

    console.log(`Question: ${data.question}`);
    const response = userResponse();

    if (data.rightAnswer !== response) {
      console.log(`${response} is wrong answer ;(. Correct answer was ${data.rightAnswer}.
        Let's try again, ${name}!`);
      break;
    }

    console.log('Correct!');
    i += 1;
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default brainGame;
