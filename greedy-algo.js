const statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

const stations = {
	kOne: new Set(['id', 'nv', 'ut']),
	kTwo: new Set(['wa', 'id', 'mt']),
	kThree: new Set(['or', 'nv', 'ca']),
	kFour: new Set(['nv', 'ut']),
	kFive: new Set(['ca', 'az']),
};

function greedyAlgo(statesNeeded, stations) {
	const finalStations = new Set();

	while (statesNeeded.size > 0) {
		let bestStation;
		let statesCovered = new Set();

		for (let station in stations) {
			const states = stations[station];
			const covered = new Set([...states].filter(x => statesNeeded.has(x)));

			if (covered.size > statesCovered.size) {
				bestStation = station;
				statesCovered = covered;
			}
		}
		finalStations.add(bestStation);
		statesCovered.forEach(x => statesNeeded.delete(x));
	}
	console.log(finalStations);
}
greedyAlgo(statesNeeded, stations);
