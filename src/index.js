import readlineSync from 'readline-sync';

const userName = () => readlineSync.question('May I have your name? ');

const ansFromUser = () => readlineSync.question('Your answer: ');

const randomIntegerNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const randomSign = () => {
  const signs = {
    1: '+',
    2: '-',
    3: '*',
  };
  const numOfSign = randomIntegerNumber(1, 3);

  return signs[numOfSign];
};

const randomExpression = () => {
  const a = randomIntegerNumber(1, 100);
  const b = randomIntegerNumber(1, 100);
  const sign = randomSign();

  return `${a} + ${sign} + ${b}`;
}

const parityСheck = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const brainEvenGame = (name) => {
  // let i = 1;
  // while (i <= 3) {
  //   const randomNum = randomIntegerNumber(1, 100);
  //   const rightAns = parityСheck(randomNum);

  //   console.log(`Question: ${randomNum}`);

  //   const ans = ansFromUser();

  //   if (rightAns !== ans.toLowerCase()) {
  //     console.log(`${ans} is wrong answer ;(. Correct answer was ${rightAns}.
  //           Let's try again, ${name}!`);
  //     break;
  //   } else {
  //     console.log('Correct!');
  //     i += 1;
  //   }
  // }
  // if (i === 4) {
  //   console.log(`Congratulations, ${name}!`);
  // }
};

export { userName, brainEvenGame, randomExpression };
