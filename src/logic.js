import readlineSync from 'readline-sync';

const round = 3;

const startGame = (igra, praf) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(praf);
  for (let i = 0; i < round; i += 1) {
    const [answer, quest] = igra();
    console.log(`Question: ${quest}`);
    const answerPlayer = readlineSync.question('Your answer: ');
    if (answer !== answerPlayer) {
      console.log(`'${answerPlayer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
