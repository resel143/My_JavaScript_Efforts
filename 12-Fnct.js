// arrow functions 

function regulatFunc() {
    return 'This is a regular function';
}

console.log(regulatFunc());

// now arrow function 

let message = ()=> 'This is the power of JS';

console.log(message());

// arrow with arguments 

let sum = (x)=> x+x;

console.log(sum(15));

// next level arrow function 

let name = (firstName, lastName) => `Owners are ${firstName} ${lastName}`;

console.log(name('Reshul','Selena'));