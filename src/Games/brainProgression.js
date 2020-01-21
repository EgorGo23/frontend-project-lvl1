import randomIntegerNumber from '../randomIntegerNumber';
import generateGame from '..';

const progressionGeneration = (numberOfElements, firstElement) => {
  const step = randomIntegerNumber(2, numberOfElements);

  const progression = [firstElement];
  for (let i = 1; i < numberOfElements; i += 1) {
    progression.push(firstElement + i * step);
  }

  return progression;
};

const task = 'What number is missing in the progression?';

const progressionLength = 10;

const generateGameDataObject = () => {
  const firstElementOfProgression = randomIntegerNumber(1, 500);
  const progression = progressionGeneration(progressionLength, firstElementOfProgression);
  const randomNumber = randomIntegerNumber(0, progression.length - 1);

  const rightAnswer = progression.splice(randomNumber, 1, '..').join();

  return {
    question: progression.join(' '),
    rightAnswer,
  };
};

export default () => generateGame(generateGameDataObject, task);
