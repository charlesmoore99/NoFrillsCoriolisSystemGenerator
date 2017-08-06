var seed = 1;

function randomDave() {
	var x = Math.sin(seed++) * 10000;
	return x - Math.floor(x);
}

var roll = function() {
	return Math.floor((randomDave() * 100000) % 6 + 1);
};

