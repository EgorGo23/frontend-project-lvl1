import randomIntegerNumber from '../randomIntegerNumber';
import brainGame from '..';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const brainPrime = () => {
  const randomNumber = randomIntegerNumber(0, 200);

  return {
    greeting: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    question: `${randomNumber}`,
    rightAnswer: isPrime(randomNumber) ? 'yes' : 'no',
  };
};

export default () => brainGame(brainPrime);
