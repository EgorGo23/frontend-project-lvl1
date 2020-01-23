import randomIntegerNumber from '../randomIntegerNumber';
import generateGame from '..';

const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
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
