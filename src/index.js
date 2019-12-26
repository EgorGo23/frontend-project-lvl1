import readlineSync from 'readline-sync';

const userName = () => readlineSync.question('May I have your name? ');

const userResponse = () => readlineSync.question('Your answer: ');

const randomIntegerNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const brainEven = () => {
  const parityСheck = (num) => ((num % 2 === 0) ? 'yes' : 'no');

  const randomNum = randomIntegerNumber(1, 100);

  return {
    question: randomNum,
    rightAnswer: parityСheck(randomNum),
  };
};

// eslint-disable-next-line consistent-return
const brainCalc = () => {
  const a = randomIntegerNumber(1, 100);
  const b = randomIntegerNumber(1, 100);
  const sign = randomIntegerNumber(1, 3);

  // eslint-disable-next-line default-case
  switch (sign) {
    case 1:
      return {
        question: `${a} + ${b}`,
        rightAnswer: `${a + b}`,
      };
    case 2:
      return {
        question: `${a} - ${b}`,
        rightAnswer: `${a - b}`,
      };
    case 3:
      return {
        question: `${a} * ${b}`,
        rightAnswer: `${a * b}`,
      };
  }
};

const brainGcd = () => {
  const a = randomIntegerNumber(1, 100);
  const b = randomIntegerNumber(1, 100);
  const gcd = (x, y) => {
    // eslint-disable-next-line no-param-reassign
    while (y !== 0) y = x % (x = y);
    return `${x}`;
  };

  return {
    question: `${a} ${b}`,
    rightAnswer: gcd(a, b),
  };
};

const brainProgression = () => {
  const progression = [5, 7, 9, 11, 13, 15, 17, 19, 21, 23];
  const randomNumber = randomIntegerNumber(0, 9);

  const rightAnswer = progression.splice(randomNumber, 1, '..').join();

  return {
    question: progression.join(' '),
    rightAnswer,
  };
};

const brainPrime = () => {
  const randomNumber = randomIntegerNumber(0, 200);
  const isPrime = (num) => {
    // eslint-disable-next-line no-plusplus
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return num > 1;
  };

  return {
    question: `${randomNumber}`,
    rightAnswer: isPrime(randomNumber) ? 'yes' : 'no',
  };
};

const functionManager = (gameName) => {
  let objectManager;

  if (gameName === 'brain-even') {
    objectManager = brainEven();
  }
  if (gameName === 'brain-calc') {
    objectManager = brainCalc();
  }
  if (gameName === 'brain-gcd') {
    objectManager = brainGcd();
  }
  if (gameName === 'brain-progression') {
    objectManager = brainProgression();
  }
  if (gameName === 'brain-prime') {
    objectManager = brainPrime();
  }

  return objectManager;
};

const brainGame = (name, game) => {
  let i = 0;
  while (i < 3) {
    const data = functionManager(game);

    console.log(`Question: ${data.question}`);
    const response = userResponse();

    if (data.rightAnswer !== response) {
      console.log(`${response} is wrong answer ;(. Correct answer was ${data.rightAnswer}.
        Let's try again, ${name}!`);
      break;
    }

    console.log('Correct!');
    i += 1;
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export { userName, brainGame };
