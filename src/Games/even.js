import randomIntegerNumber from '../randomIntegerNumber';
import generateGame from '..';

const isEven = (num) => (num % 2 === 0);

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameData = () => {
  const randomNum = randomIntegerNumber(1, 100);

  return {
    question: randomNum,
    rightAnswer: (isEven(randomNum) === true) ? 'yes' : 'no',
  };
};

export default () => generateGame(generateGameData, task);
