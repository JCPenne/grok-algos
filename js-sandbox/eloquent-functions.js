// const minimum = (num1, num2) => {
//   return num1 <= num2 ? num1 : num2;
// };
// console.log(minimum(0, 10));
// console.log(minimum(0, -10));

// const isEven = n => {
//   n = Math.abs(n);
//   if (n === 0) {
//     return true;
//   }
//   if (n === 1) {
//     return false;
//   } else {
//     return isEven(n - 2);
//   }
// };

// console.log(isEven(-5));

const countBs = (string) => {
  let counter = 0;
  const splitString = string.split('');
  for (letters of splitString) {
    if (letters === 'B') {
      counter += 1;
    }
  }
  return counter;
}

console.log(countBs('BB B'));

const countChar = (string,letter) => {
  let counter = 0;
  const splitString = string.split('');
  for (letters of splitString) {
    if (letters === letter) {
      counter += 1;
    }
  }
  return counter
}

console.log(countChar('bumblebee','m'));