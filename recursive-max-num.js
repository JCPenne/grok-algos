function findMaxNum(list, current) {
	let currentMax = current || 0;

  //Update currentMax if first element in list is greater than
	if (Object.values(list)[0] > currentMax) {
		currentMax = Object.values(list)[0];
	}
  //Base case #1. If only one element left in list and it's greater than currentMax, return it.
	if (Object.keys(list).length === 1 && Object.values(list)[0] > currentMax) {
		return Object.values(list)[0];
	}
  //Base case #2. If only one element left in list and it's equal or less than currentMax, return currentMax.
	if (Object.keys(list).length === 1 && Object.values(list)[0] <= currentMax) {
		return currentMax;
	}
  //Remove first element in list
	delete list[Object.keys(list)[0]];
  //Recursively run function with new currentMax and shortened list
	return findMaxNum(list, currentMax);
}

const myList = {
	first: 500,
	second: 2,
	third: 100,
	fourth: -4,
	fifth: 8,
	sixth: 5000,
};

console.log(maxNum(myList));
