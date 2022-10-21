const Arr = [];
i = 0;
while (i < 100) {
	Arr.push(i);
	i++;
}

const binary_search = (Arr, num) => {
	let low = 0;
	let high = Arr.length - 1;

	while (low <= high) {
		let mid = Math.round(low + high / 2);
		guess = Arr[mid];
		console.log(guess);

		if (guess === num) {
			console.log('number found');
			return mid;
		}
		if (guess > num) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
};
binary_search(Arr, 45);
