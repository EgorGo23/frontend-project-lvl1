import randomIntegerNumber from '../randomIntegerNumber';
import generateGame from '..';

const task = 'What is the result of the expression?';

const generateGameDataObject = () => {
  const a = randomIntegerNumber(1, 100);
  const b = randomIntegerNumber(1, 100);

  const computedExpressions = {
    '+': `${a + b}`,
    '-': `${a - b}`,
    '*': `${a * b}`,
  };

  const operations = Object.keys(computedExpressions);
  const randomOperation = operations[randomIntegerNumber(0, operations.length - 1)];

  return {
    question: `${a} ${randomOperation} ${b}`,
    rightAnswer: `${computedExpressions[randomOperation]}`,
  };
};

export default () => generateGame(generateGameDataObject, task);
