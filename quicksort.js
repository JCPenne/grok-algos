function quickSort(arr) {
	const randIndex = Math.floor(Math.random() * arr.length);

	if (arr.length <= 1) {
		return arr;
	}
	const pivot = arr.splice(randIndex, 1);
	const less = [];
	const more = [];

	for (num of arr) {
		num < pivot ? less.push(num) : more.push(num);
	}

	return quickSort(less).concat(pivot).concat(quickSort(more));
}

const Arr = [5, 3, 7, 8, 2, 12, 82, 1, 4, 67, 23, 65, 3, 8, 9, 2];
console.log(quickSort(Arr));
