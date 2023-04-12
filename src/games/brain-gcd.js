import { getRandomNum } from '../random.js';
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
  const vopros = `${num1} ${num2}`;
  const otvet = gcd(num1, num2).toString();
  return [otvet, vopros];
};

const startGamegcd = () => {
    startGame(igra, praf);
};
startGamegcd()
export default startGamegcd;
