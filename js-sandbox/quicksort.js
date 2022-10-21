function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	const pivot = arr.shift();
	const less = [];
	const more = [];

	for (num of arr) {
		num < pivot ? less.push(num) : more.push(num);
	}

	return quickSort(less).concat(pivot).concat(quickSort(more));
}

const Arr = [5, 3, 7, 8, 2];
console.log(quickSort(Arr));
