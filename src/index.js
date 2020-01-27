import readlineSync from 'readline-sync';

const userName = () => readlineSync.question('May I have your name? ');

const userResponse = () => readlineSync.question('Your answer: ');

const numberOfRounds = 3;

const generateGame = (game, gameTask) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameTask);

  const name = userName();
  console.log(`Hello, ${name}`);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const data = game();

    console.log(`Question: ${data.question}`);
    const response = userResponse();

    if (data.rightAnswer !== response) {
      console.log(`${response} is wrong answer ;(. Correct answer was ${data.rightAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default generateGame;
