var coffeeTypes = ['Presidentti', 'Crescendo', 'Herra Korppi'];

function getCoffeeType() {
	var type = coffeeTypes[Math.floor(Math.random() * coffeeTypes.length)];
	console.log('Kahvilaji on ' + type);
}

module.exports = getCoffeeType;