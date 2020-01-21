import readlineSync from 'readline-sync';

const userName = () => readlineSync.question('May I have your name? ');

const userResponse = () => readlineSync.question('Your answer: ');

const numberOfRounds = 3;

const generateGame = (game, gameTask) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameTask);

  const name = userName();
  console.log(`Hello, ${name}`);

  for (let roundCounter = 0; roundCounter < numberOfRounds; roundCounter += 1) {
    const data = game();

    console.log(`Question: ${data.question}`);
    const response = userResponse();

    if (data.rightAnswer !== response) {
      console.log(`${response} is wrong answer ;(. Correct answer was ${data.rightAnswer}.
        Let's try again, ${name}!`);
      break;
    }

    console.log('Correct!');

    if (roundCounter === numberOfRounds - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default generateGame;
