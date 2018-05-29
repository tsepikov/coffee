var bruteForcePrevention = require('./bruteforceprevention');
var coffeeAlgorithm = require('./hourbased');

console.log('The time is', new Date().getHours() + ':' + new Date().getMinutes(), 'but is it coffee time??');

bruteForcePrevention().then(main);

function main() {
  if (isItTime()) {
    coffeeSuccess();
  } else {
    coffeeFailure();
  }
}

function isItTime() {
  return coffeeAlgorithm();
}

function coffeeSuccess() {
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

function coffeeFailure() {
  console.log('Not yet :(');
}