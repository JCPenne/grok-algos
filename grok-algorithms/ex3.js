// const look_for_key = () => {
//   pile = main_box.make_a_pile();
//   while (pile !== 0) {
//     box = pile.grab_box()
//     for (let item of box) {
//       if (item === box) {
//         pile.push(item)
//       }
//       else if (item === key) {
//         console.log('key found');
//       }
//     }
//   }
// }

// const look_for_key = () => {
// 	for (let item of box) {
// 		if (item === key) {
// 			console.log('key found');
// 		}
// 		look_for_key(item);
// 	}
// };

const factorial = i => {
	if (i === 1) {
		return i;
	}
	return i * factorial(i - 1);
};
console.log(factorial(4));
