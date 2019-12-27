import randomIntegerNumber from './randomIntegerNumber';

const brainProgression = () => {
  const progression = [5, 7, 9, 11, 13, 15, 17, 19, 21, 23];
  const randomNumber = randomIntegerNumber(0, 9);

  const rightAnswer = progression.splice(randomNumber, 1, '..').join();

  return {
    question: progression.join(' '),
    rightAnswer,
  };
};

export default brainProgression;
