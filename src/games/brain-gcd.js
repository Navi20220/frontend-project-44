import getRandomNum from '../random.js';
import startGame from '../logic.js';

const praf = 'Find the greatest common divisor of given numbers.';
const rangemin = 1;
const rangemax = 100;

export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const igra = () => {
  const num1 = getRandomNum(rangemin, rangemax);
  const num2 = getRandomNum(rangemin, rangemax);
  const quest = `${num1} ${num2}`;
  const answer = gcd(num1, num2).toString();
  return [answer, quest];
};

const startGamegcd = () => {
  startGame(igra, praf);
};

export default startGamegcd;
