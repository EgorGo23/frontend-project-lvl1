import randomIntegerNumber from '../randomIntegerNumber';
import generateGame from '..';

const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.floor(num / 2); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateGameData = () => {
  const randomNumber = randomIntegerNumber(0, 200);

  return {
    question: `${randomNumber}`,
    rightAnswer: isPrime(randomNumber) ? 'yes' : 'no',
  };
};

export default () => generateGame(generateGameData, task);
