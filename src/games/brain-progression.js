import getRandomNum from '../random.js';
import startGame from '../logic.js';

const praf = 'What number is missing in the progression?';

const getProgression = (start, step, length) => {
  const progression = [];
  for (let i = 1; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const igra = () => {
  const lengthprogression = getRandomNum(5, 10);
  const stepprogression = getRandomNum(1, 5);
  const startpoint = getRandomNum(1, 10);
  const finishpoint = getRandomNum(0, lengthprogression - 2);
  const progression = getProgression(startpoint, stepprogression, lengthprogression);
  const answer = progression[finishpoint] ? progression[finishpoint].toString() : `ошибка ${progression}, ${finishpoint}`;
  progression.splice(finishpoint, 1, '..');
  const quest = progression.join(' ');
  return [answer, quest];
};

const startGameprogression = () => {
  startGame(igra, praf);
};
export default startGameprogression;
