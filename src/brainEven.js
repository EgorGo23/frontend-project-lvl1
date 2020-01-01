import randomIntegerNumber from './randomIntegerNumber';

const brainEven = () => {
  const parityСheck = (num) => ((num % 2 === 0) ? 'yes' : 'no');

  const randomNum = randomIntegerNumber(1, 100);

  return {
    greeting: 'Answer "yes" if the number is even, otherwise answer "no".',
    question: randomNum,
    rightAnswer: parityСheck(randomNum),
  };
};

export default brainEven;
