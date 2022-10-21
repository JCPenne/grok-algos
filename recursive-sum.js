function RecSum(arr) {
	if (arr.length === 0) {
		return 0;
	}
	return arr[0] + RecSum(arr.splice(1));
}

const TestArr = [1, 2, 3, 4, 5];
console.log(RecSum(TestArr));
