import randomIntegerNumber from '../randomIntegerNumber';
import brainGame from '..';

const isEven = (num) => ((num % 2 === 0));

const brainEven = () => {
  const randomNum = randomIntegerNumber(1, 100);

  return {
    greeting: 'Answer "yes" if the number is even, otherwise answer "no".',
    question: randomNum,
    rightAnswer: (isEven(randomNum) === true) ? 'yes' : 'no',
  };
};

export default () => brainGame(brainEven);
