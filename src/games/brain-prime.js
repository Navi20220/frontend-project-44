import { getRandomNum } from '../random.js';
import startGame from '../logic.js';

const praf = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const rangemin = 1;
const rangemax = 100;

const isprime = (number) => {
  if (number === 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const igra = () => {
  const number = getRandomNum(rangemin, rangemax);
  const otvet = isprime(number) ? 'yes' : 'no';
  const vopros = number;
  return [otvet, vopros];
};
console.log(1111, igra())
const startGameprime = () => {
    startGame(igra, praf);
};
startGame()
export default startGameprime;