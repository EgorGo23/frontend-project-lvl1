import randomIntegerNumber from '../randomIntegerNumber';
import brainGame from '..';

const gcd = (x, y) => {
  if (!y) {
    return x;
  }
  return gcd(y, x % y);
};

const brainGcd = () => {
  const a = randomIntegerNumber(1, 100);
  const b = randomIntegerNumber(1, 100);

  return {
    greeting: 'Find the greatest common divisor of given numbers.',
    question: `${a} ${b}`,
    rightAnswer: `${gcd(a, b)}`,
  };
};

export default () => brainGame(brainGcd);
