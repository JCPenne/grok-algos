const num = Math.round(Math.random() * 1000000);
let counter = 0;

const binaryAlgorithm = (number, guess, min, max, counter) => {
  console.log(`min = ${min}`);
  console.log(`max = ${max}`);
  console.log(`number = ${number}`);
  console.log(`Guess = ${guess}`);
  console.log(`\n`);

  if (guess === number) {
    counter += 1;
    console.log(
      `Success! Your guess was ${guess} and my number was ${number}. 
      It took you ${counter} steps to guess correctly`,
    );
  }
  if (guess > number) {
    counter += 1;
    let currentMax = guess;
    let currentMin = min;
    let nextGuess = Math.round((guess - min) / 2 + min);
    binaryAlgorithm(number, nextGuess, currentMin, currentMax, counter);
  }
  if (guess < number) {
    counter += 1;
    let currentMax = max;
    let currentMin = guess;
    let nextGuess = Math.round((max - guess) / 2 + guess);
    binaryAlgorithm(number, nextGuess, currentMin, currentMax, counter);
  }
};

binaryAlgorithm(num, 500000, 0, 1000000, counter);
