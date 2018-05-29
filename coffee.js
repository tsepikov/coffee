
const COFFEE_THRESHOLD = 0.9;

if(isItTime()) {
  coffeeSuccess();
} else {
  coffeeFailure();
}

function isItTime() {
  return Math.random() >= COFFEE_THRESHOLD;
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