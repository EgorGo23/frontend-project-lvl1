import readlineSync from 'readline-sync';

const userName = () => readlineSync.question('May I have your name? ');

const userResponse = () => readlineSync.question('Your answer: ');

const numberOfRounds = 3;

const brainGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const { greeting } = game();
  console.log(greeting);

  const name = userName();
  console.log(`Hello, ${name}`);

  let roundCounter = 0;
  while (roundCounter < numberOfRounds) {
    const data = game();

    console.log(`Question: ${data.question}`);
    const response = userResponse();

    if (data.rightAnswer !== response) {
      console.log(`${response} is wrong answer ;(. Correct answer was ${data.rightAnswer}.
        Let's try again, ${name}!`);
      break;
    }

    console.log('Correct!');
    roundCounter += 1;
  }
  if (roundCounter === numberOfRounds) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default brainGame;
