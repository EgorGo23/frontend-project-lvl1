import randomIntegerNumber from './randomIntegerNumber';

const brainPrime = () => {
  const randomNumber = randomIntegerNumber(0, 200);
  const isPrime = (num) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return num > 1;
  };

  return {
    greeting: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    question: `${randomNumber}`,
    rightAnswer: isPrime(randomNumber) ? 'yes' : 'no',
  };
};

export default brainPrime;
