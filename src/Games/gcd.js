import randomIntegerNumber from '../randomIntegerNumber';
import generateGame from '..';

const gcd = (x, y) => {
  if (!y) {
    return x;
  }
  return gcd(y, x % y);
};

const task = 'Find the greatest common divisor of given numbers.';

const generateGameData = () => {
  const a = randomIntegerNumber(1, 100);
  const b = randomIntegerNumber(1, 100);

  return {
    question: `${a} ${b}`,
    rightAnswer: gcd(a, b).toString(),
  };
};

export default () => generateGame(generateGameData, task);
