import randomIntegerNumber from '../randomIntegerNumber';
import generateGame from '..';

const progressionLength = 10;

const getProgression = (numberOfElements, initialValue, step) => {
  const progression = [];
  for (let i = 0; i < numberOfElements; i += 1) {
    progression.push(initialValue + i * step);
  }

  return progression;
};

const task = 'What number is missing in the progression?';

const generateGameDataObject = () => {
  const firstElementOfProgression = randomIntegerNumber(1, 500);
  const progressionStep = randomIntegerNumber(2, progressionLength);
  const progression = getProgression(progressionLength, firstElementOfProgression, progressionStep);
  const randomProgressionElementIndex = randomIntegerNumber(0, progression.length - 1);

  const rightAnswer = progression.splice(randomProgressionElementIndex, 1, '..').join();

  return {
    question: progression.join(' '),
    rightAnswer,
  };
};

export default () => generateGame(generateGameDataObject, task);
