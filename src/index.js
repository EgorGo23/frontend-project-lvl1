import readlineSync from 'readline-sync';

const userName = () => readlineSync.question('May I have your name? ');

const userResponse = () => readlineSync.question('Your answer: ');

const randomIntegerNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};


// eslint-disable-next-line consistent-return
const bodyGameCalc = () => {
  const a = randomIntegerNumber(1, 100);
  const b = randomIntegerNumber(1, 100);
  const sign = randomIntegerNumber(1, 3);

  if (sign === 1) {
    return {
      question: `${a} + ${b}`,
      rightAnswer: a + b,
    };
  } if (sign === 2) {
    return {
      question: `${a} - ${b}`,
      rightAnswer: a - b,
    };
  } if (sign === 3) {
    return {
      question: `${a} * ${b}`,
      rightAnswer: a * b,
    };
  }
};

const bodyGameEven = () => {
  const parityСheck = (num) => ((num % 2 === 0) ? 'yes' : 'no');

  const randomNum = randomIntegerNumber(1, 100);

  return {
    question: randomNum,
    rightAnswer: parityСheck(randomNum),
  };
};

const brainGcd = () => {
  const a = randomIntegerNumber(1, 100);
  const b = randomIntegerNumber(1, 100);
  const gcd = (x, y) => {
    // eslint-disable-next-line no-param-reassign
    while (y !== 0) y = x % (x = y);
    return x;
  };

  return {
    question: `${a} ${b}`,
    rightAnswer: gcd(a, b),
  };
};

const brainGame = (name, game) => {
  let i = 1;
  while (i <= 3) {
    if (game === 'brain-even') {
      const { question, rightAnswer } = bodyGameEven();

      console.log(`Question: ${question}`);
      const response = userResponse();

      if (rightAnswer !== response) {
        console.log(`${response} is wrong answer ;(. Correct answer was ${rightAnswer}.
              Let's try again, ${name}!`);
        break;
      } else {
        console.log('Correct!');
        i += 1;
      }
    }
    if (game === 'brain-calc') {
      const { question, rightAnswer } = bodyGameCalc();

      console.log(`Question: ${question}`);
      const response = userResponse();

      if (rightAnswer !== +response) {
        console.log(`${response} is wrong answer ;(. Correct answer was ${rightAnswer}.
              Let's try again, ${name}!`);
        break;
      } else {
        console.log('Correct!');
        i += 1;
      }
    }
    if (game === 'brain-gcd') {
      const { question, rightAnswer } = brainGcd();

      console.log(`Question: ${question}`);
      const response = userResponse();

      if (rightAnswer !== +response) {
        console.log(`${response} is wrong answer ;(. Correct answer was ${rightAnswer}.
              Let's try again, ${name}!`);
        break;
      } else {
        console.log('Correct!');
        i += 1;
      }
    }
  }
  if (i === 4) {
    console.log(`Congratulations, ${name}!`);
  }
};

export { userName, brainGame };
