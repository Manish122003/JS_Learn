// const score = 100;
// console.log(score);

// const newScore = new Number(100);
// console.log(newScore);

// console.log(newScore.toString());
// console.log(typeof newScore.toString());
// console.log(newScore.toString().length);

// const newScore2 = new Number(100.001);
// console.log(newScore2);
// console.log(newScore2.toFixed(2)); //will give two decimal values only

// const newScore3 = new Number(100.690);
// console.log(newScore3);
// console.log(newScore3.toPrecision(3));
// console.log(newScore3.toPrecision(4));
// console.log(newScore3.toPrecision(5));

// const newScore4 = 1000000;
// console.log(newScore4);
// console.log(newScore4.toLocaleString()); // based on us system
// console.log(newScore4.toLocaleString('en-IN')); // based on indian system

// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);

//------------------------ MATH ----------------------------------

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.SQRT1_2);
// console.log(Math.SQRT2);
// console.log(Math.LN10);
// console.log(Math.abs(-589));  //makes negative positive
// console.log(Math.round(4.56));  //round of the decimal
// console.log(Math.ceil(4.06));  //gets the higher value
// console.log(Math.floor(4.56));  //gets the lower walue
// console.log(Math.sqrt(4));  // returns the square root of the given number
// console.log(Math.min(4,5,6,1,2,3));
// console.log(Math.max(4,5,6,1,2,3));

console.log(Math.random()); //genrates a random number between 0 and 1
console.log(Math.floor((Math.random() * 10 )+ 1)); //genrates a random number between 1 and 10

const maxx = 20;
const minn = 10;
console.log(Math.floor(Math.random() * (maxx - minn + 1))+minn);

//  Math.floor(Math.random() * (maxx - minn + 1))+minn  to get  a random number in the range of max and min