import randomIntegerNumber from './randomIntegerNumber';

const isEven = (num) => ((num % 2 === 0));

const brainEven = () => {
  const randomNum = randomIntegerNumber(1, 100);

  return {
    greeting: 'Answer "yes" if the number is even, otherwise answer "no".',
    question: randomNum,
    rightAnswer: (isEven(randomNum) === true) ? 'yes' : 'no',
  };
};

export default brainEven;
