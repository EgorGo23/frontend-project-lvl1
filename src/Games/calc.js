import randomInteger from '../randomInteger';
import generateGame from '..';

const task = 'What is the result of the expression?';

const computedExpressions = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const generateGameData = () => {
  const a = randomInteger(1, 100);
  const b = randomInteger(1, 100);

  const operations = Object.keys(computedExpressions);
  const randomOperation = operations[randomInteger(0, operations.length - 1)];

  return {
    question: `${a} ${randomOperation} ${b}`,
    rightAnswer: `${computedExpressions[randomOperation](a, b)}`,
  };
};

export default () => generateGame(generateGameData, task);
