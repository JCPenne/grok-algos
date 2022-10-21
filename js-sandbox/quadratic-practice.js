// const quadAlgo = (arr, num) => {
//   for (let i = 0; i < arr.length; i++) {
//     const element1 = array[i];
//     for (let ii = 0; ii < arr.length; ii++) {
//       const element2 = array[ii];

//       if (element1 + element2 === num) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

const sum = (arr,num) => {
  const element1 = 0;
  const element2 = arr.length - 1;

  while (i <= ii) {
    const element1 = array[i];
    const element2 = array[ii];
    const currentSum = element1 + element2;

    if (currentSum === num) {
      return true;
    } else if (currentSum > num) {
      ii--;
    } else {
      i++;
    }
  }
  return false;
}
