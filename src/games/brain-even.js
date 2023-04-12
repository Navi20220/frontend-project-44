import { getRandomNum } from '../random.js';
import startGame from '../logic.js';

const praf = 'Answer "yes" if the number is even, otherwise answer "no".';
const rangemin = 1;
const rangemax = 100;
const iseven = (num) => num % 2 === 0;

const igra = () => {
  const number = getRandomNum(rangemin, rangemax);
  const correctanswer = iseven(number) ? 'yes' : 'no';
  const Quest = number;
  return [correctanswer, Quest];
};
const startGameeven = () => {
    startGame(igra, praf);
};
startGameeven()
export default startGameeven;