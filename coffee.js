var coffee = new Coffee();
coffee.rollTheDice();

function Coffee() {

	this.bruteForcePrevention = require('./bruteforceprevention');
	this.coffeeAlgorithm = require('./hourbased');
	this.coffeeType = require('./coffeeTypeSelector');
	
	Coffee.prototype.rollTheDice = function() {
		console.log('The time is', new Date().getHours() + ':' + new Date().getMinutes(), 'but is it coffee time??');

		this.bruteForcePrevention().then(this.main);
	}
	
	Coffee.prototype.main = function() {
	  if (coffee.isItTime()) {
		coffee.coffeeSuccess();
		coffee.coffeeType();
	  } else {
		coffee.coffeeFailure();
	  }	  
	}

	Coffee.prototype.isItTime = function() {
	  return this.coffeeAlgorithm();
	}

	Coffee.prototype.coffeeSuccess = function() {
	  console.log(` 
			   {
			{   }
			 }_{ __{
		  .-{   }   }-.
		 (   }     {   )
		 |\`-.._____..-'|
		 |             ;--.
		 |            (__  \\
		 |             | )  )
		 |             |/  /
		 |             /  /
		 |            (  /
		 \\             y'
		  \`-.._____..-'`);
	}

	Coffee.prototype.coffeeFailure = function() {
	  console.log('Not yet :(');
	}

}