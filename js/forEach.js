'use strict';
console.log('forEach.js');

// array.forEach(function(currentValue, index, arr) {})
// array.forEach((currentValue, index, arr) => {})

// Array.prototype.forEach - skirtas labiau side efektam

const nums = [1, 2, 3];

nums.forEach((sk, i, arr) => {
  console.log(i, 'sk ===', sk);
});

// nums.forEach((sk) => console.log('sk ===', sk));

// suskaiciuoti suma
let suma = 0;
nums.forEach((sk) => (suma += sk));
console.log('suma ===', suma);
