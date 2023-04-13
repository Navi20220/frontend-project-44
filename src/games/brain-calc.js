import getRandomNum from '../random.js';
import startGame from '../logic.js';

const praf = 'What is the result of the expression?';

const rangemin = 1;
const rangemax = 100;
const operators = ['+', '-', '*'];
const getRandomOperator = (oper) => Math.floor(Math.random() * oper.length);

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return false;
  }
};

const igra = () => {
  const num1 = getRandomNum(rangemin, rangemax);
  const num2 = getRandomNum(rangemin, rangemax);
  const operator = operators[getRandomOperator(operators)];
  const quest = `${num1} ${operator} ${num2}`;
  const answer = calculate(num1, num2, operator).toString();
  return [answer, quest];
};

const startGameCalc = () => {
  startGame(igra, praf);
};

export default startGameCalc;
