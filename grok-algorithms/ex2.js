const findSmallest = arr => {
	let smallest = arr[0];
	let smallest_index = 0;

	arr.forEach(x => {
		if (x < smallest) {
			smallest = x;
			smallest_index = arr.indexOf(x);
		}
	});
	return smallest_index;
};

const selectionSort = arr => {
	newArr = [];

	for (let i = 0; i <= arr.length; i++) {
		smallest = findSmallest(arr);
		newArr.push(arr[smallest]);
		arr.splice(smallest, 1);
		i = 0;
	}
	return newArr;
};

console.log(selectionSort([7, 5, 3, 42, 86, 2352, 2, 778, 8, 56]));
