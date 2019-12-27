import randomIntegerNumber from './randomIntegerNumber';

const brainEven = () => {
  const parityСheck = (num) => ((num % 2 === 0) ? 'yes' : 'no');

  const randomNum = randomIntegerNumber(1, 100);

  return {
    question: randomNum,
    rightAnswer: parityСheck(randomNum),
  };
};

export default brainEven;
