graph = {};
graph.Jack = {
	mangoSeller: false,
	friends: {
		Chantal: {
			mangoSeller: false,
			friends: {
				Natalie: {
					mangoSeller: false,
				},
				Melissa: {
					mangoSeller: true,
				},
				Annie: {
					mangoSeller: false,
				},
			},
		},
		Andre: {
			mangoSeller: false,
		},
		Lukas: {
			mangoSeller: false,
		},
	},
};

function breadth_first(graph) {
	queue = [];
	searched = [];

	for (let person in graph.Jack.friends) {
		queue.push(person);
	}
	console.log(queue);

	for (let person1 of queue) {
		if (graph.Jack.friends[person1].mangoSeller) {
			console.log(`${person1} is the mango seller!`);
		} else {
			for (let person2 in graph.Jack.friends[person1].friends) {
				queue.push(graph.Jack.friends[person1].friends[person2]);
			}
			console.log(queue);
		}
	}
}

function person_is_seller(person) {
	return person.mangoSeller;
}

console.log(breadth_first(graph));
