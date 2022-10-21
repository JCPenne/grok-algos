function recursiveCount(arr) {
	if (arr.length === 0) {
		return 0;
	}
	let count = 0;
	return (count = 1 + recursiveCount(arr.splice(1)));
}

const Arr = Array.from(Array(200).keys());

console.log(recursiveCount(Arr));
