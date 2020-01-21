import randomIntegerNumber from '../randomIntegerNumber';
import generateGame from '..';

const isPrime = (num) => {
  if (num === 1) return false;

  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateGameDataObject = () => {
  const randomNumber = randomIntegerNumber(0, 200);

  return {
    question: `${randomNumber}`,
    rightAnswer: isPrime(randomNumber) ? 'yes' : 'no',
  };
};

export default () => generateGame(generateGameDataObject, task);
