import randomIntegerNumber from './randomIntegerNumber';

const progressionGeneration = (numberOfElements) => {
  const firstElement = randomIntegerNumber(1, 500);
  const step = randomIntegerNumber(0, numberOfElements);

  // eslint-disable-next-line prefer-const
  let progression = [firstElement];
  for (let i = 1; i < numberOfElements; i += 1) {
    progression.push(firstElement + i * step);
  }

  return progression;
};

const brainProgression = () => {
  const progression = progressionGeneration(10);
  const randomNumber = randomIntegerNumber(0, progression.length - 1);

  const rightAnswer = progression.splice(randomNumber, 1, '..').join();

  return {
    greeting: 'What number is missing in the progression?',
    question: progression.join(' '),
    rightAnswer,
  };
};

export default brainProgression;
