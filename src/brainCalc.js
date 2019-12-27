import randomIntegerNumber from './randomIntegerNumber';

// eslint-disable-next-line consistent-return
const brainCalc = () => {
  const a = randomIntegerNumber(1, 100);
  const b = randomIntegerNumber(1, 100);
  const sign = randomIntegerNumber(1, 3);

  // eslint-disable-next-line default-case
  switch (sign) {
    case 1:
      return {
        question: `${a} + ${b}`,
        rightAnswer: `${a + b}`,
      };
    case 2:
      return {
        question: `${a} - ${b}`,
        rightAnswer: `${a - b}`,
      };
    case 3:
      return {
        question: `${a} * ${b}`,
        rightAnswer: `${a * b}`,
      };
  }
};

export default brainCalc;
