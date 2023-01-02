"use strict";
const array = [
	{ name: "mani", age: 32 },
	{ name: "vel", age: 31 },
	{ name: "mani", age: 23 },
];

module.exports.postmethod = async (event) => {
	const data = event.body;
	console.log(data);
	array.push(data);
	console.log(array);

	return {
		statusCode: 200,
		body: JSON.stringify({
			message: "Hello there!!!",
			input: event,
		}),
	};
};

module.exports.putmethod = async (event) => {
	const data = JSON.parse(event.body);
	//console.log(data);
	array.forEach((eve) => {
		if (eve.name == data.name) {
			eve.name = data.name;
		}
	});
};

module.exports.deletemethod = async (event) => {
	const data = JSON.parse(event.body);
	array.filter((eve) => {
		if (eve.name == data.name) {
			array.splice(array.indexOf(eve), 1);
		}
	});
	console.log(array);
};

module.exports.getmethod = async (event) => {
	const data = JSON.parse(event.body);
	array.map((eve) => {
		if (eve.name == data.name) {
			console.log(eve);
		}
	});
};
