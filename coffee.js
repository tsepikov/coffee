const COFFEE_THRESHOLD = 0.9;

console.log(isItTime() ? 'Yes, it is time!' : 'Not yet :(');

function isItTime() {
  return Math.random() >= COFFEE_THRESHOLD;
}
