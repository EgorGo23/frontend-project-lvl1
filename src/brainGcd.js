import randomIntegerNumber from './randomIntegerNumber';

const brainGcd = () => {
  const a = randomIntegerNumber(1, 100);
  const b = randomIntegerNumber(1, 100);
  const gcd = (x, y) => {
    // eslint-disable-next-line no-param-reassign
    while (y !== 0) y = x % (x = y);
    return `${x}`;
  };

  return {
    question: `${a} ${b}`,
    rightAnswer: gcd(a, b),
  };
};

export default brainGcd;
