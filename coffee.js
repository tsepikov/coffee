if(isItTime()) {
  coffeeSuccess();
} else {
  coffeeFailure();
}

function isItTime() {
  return Math.random() >= 0.9;
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