import randomIntegerNumber from '../randomIntegerNumber';
import brainGame from '..';


const brainCalc = () => {
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
    greeting: 'What is the result of the expression?',
    question: `${a} ${randomOperation} ${b}`,
    rightAnswer: `${computedExpressions[randomOperation]}`,
  };
};

export default () => brainGame(brainCalc);
