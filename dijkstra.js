graph = { start: { a: 6, b: 2 }, a: { fin: 1 }, b: { a: 3, fin: 5 }, fin: {} };
// console.table(graph);

costs = { a: 6, b: 2, fin: Infinity };
// console.table(costs);

parents = { a: 'start', b: 'start', fin: null };
// console.table(parents);

function Dijkstra(graph, costs, parents) {
	const processed = [];
	node = findLowestCostNode(costs, processed);

	while (node !== null) {
		cost = costs[node];
		neighbors = graph[node];

		for (let n of Object.keys(neighbors)) {
			let newCost = cost + neighbors[n];

			if (costs[n] > newCost) {
				costs[n] = newCost;
				parents[n] = node;
			}
		}
		processed.push(node);
		node = findLowestCostNode(costs, processed);
	}
	console.table(parents);
}

function findLowestCostNode(costs, processed) {
	let lowestCost = Infinity;
	let lowestCostNode = null;

	for (node in costs) {
		let cost = costs[node];

		if (cost < lowestCost && !processed.includes(node)) {
			lowestCost = cost;
			lowestCostNode = node;
		}
	}
	return lowestCostNode;
}

// Dijkstra(graph, costs, parents);
// console.table(graph);
// console.table(costs);
// console.table(parents);
// console.log(processed);

const graph2 = {
	start: { a: 5, b: 2 },
	a: { c: 4, d: 2 },
	b: { a: 8, d: 7 },
	c: { d: 6, fin: 3 },
	d: { fin: 1 },
	fin: {},
};
const costs2 = {
	a: 6,
	b: 2,
	c: Infinity,
	d: Infinity,
	fin: Infinity,
};
const parents2 = {
	a: 'start',
	b: 'start',
	c: null,
	d: null,
	fin: null,
};
// Dijkstra(graph2, costs2, parents2);

const graph3 = {
	start: { a: 10 },
	a: { b: 20 },
	b: { c: 1, fin: 30 },
	c: { a: 1 },
	fin: {},
};
const costs3 = {
	a: 10,
	b: Infinity,
	c: Infinity,
	fin: Infinity,
};
const parents3 = {
	a: 'start',
	b: null,
	c: null,
	fin: null,
};
// Dijkstra(graph3, costs3, parents3);

const graph4 = {
	start: { a: 2, b: 2 },
	a: { c: 2, fin: 2 },
	b: { a: 2 },
	c: { b: -1, fin: 2 },
	fin: {},
};
const costs4 = {
	a: 2,
	b: 2,
	c: Infinity,
	fin: Infinity,
};
const parents4 = {
	a: 'start',
	b: 'start',
	c: null,
	fin: null,
};
Dijkstra(graph4, costs4, parents4);
