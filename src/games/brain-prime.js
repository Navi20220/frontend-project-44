import getRandomNum from '../random.js';
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
  const answer = isprime(number) ? 'yes' : 'no';
  const quest = number;
  return [answer, quest];
};

const startGameprime = () => {
  startGame(igra, praf);
};

export default startGameprime;
