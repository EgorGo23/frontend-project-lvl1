import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const generateGame = (getGameData, gameTask) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameTask);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  for (let i = 0; i < numberOfRounds; i += 1) {
    const data = getGameData();

    console.log(`Question: ${data.question}`);
    const response = readlineSync.question('Your answer: ');

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
