const arraySearch = (arr, item) => {
  let min = 0; // 1
  let max = arr.length - 1; // 1

  while (true) {
    const middleIndex = Math.floor((min + max) / 2);
    const currentItem = arr[middleIndex];

    if (currentItem === item) {
      return middleIndex;
    } else if (currentItem < item) {
      min = middleIndex + 1;
    } else {
      max = middleIndex - 1;
    }
    if (min > max) {
      return null;
    }
  }
};

console.log(arraySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
