'use strict';
console.log('filter.js');

// array.filter(function(currentValue, index, arr) {})
// const atrkinktasMasyvas = array.filter((currentValue, index, arr) => {})
// i atrkinktasMasyvas gryzta reisme tada kai vidine funkcija grazina true

// Array.prototype.filter - skirtas atrinkti reiksmems pagal salyga.
// kai atrinktame masyve yra maziau reiksmiu ne is ko rinkom
// dazniausiai nenaudojamas pakeisti reiksmem

const nums = [1, -5, 2, 10, -4, 3];
// const elements = [1, 'true', 'true', false, null, undefined, 'blue', 50];

// atrinkti teigiamus
const positivesArr = nums.filter((sk) => {
  if (sk > 0) {
    return true;
  } else {
    return false;
  }
  // return sk > 0;
});
//                          sk  sk  sk sk
const positivesArrOneLine = [1, -5, 2, 10, -4, 3].filter((sk) => sk > 0);
const negativeArrOneLine = nums.filter((sk) => sk < 0);

console.log('positivesArrOneLine ===', positivesArrOneLine);
console.log('negativeArrOneLine ===', negativeArrOneLine);

const more1less10 = (sk) => sk > 1 && sk < 10;
const even = (sk) => sk % 2 === 0;
// const even = (sk) => !(sk % 2);

// function more1less10(sk) {
//   return sk > 1 && sk < 10;
// }

console.log('nums.filter(more1less10) ===', nums.filter(more1less10));
console.log('nums.filter(even) ===', nums.filter(even));

const elements = [1, 'true', 'green', false, null, undefined, 'blue', 50];

// atrinkti string tipo el
const stringsArr = elements.filter((el) => typeof el === 'string');
console.log('stringsArr ===', stringsArr);

// atrinkti number tipo el

// atrinkti viska iskyrus string ir number tipo el
const notStringNotNumArr = elements.filter(
  (el) => typeof el !== 'string' && typeof el !== 'number'
);
console.log('notStringNotNumArr ===', notStringNotNumArr);

const notStringNotNumArr2 = elements
  .filter((el) => typeof el !== 'string')
  .filter((el) => typeof el !== 'number');

console.log('notStringNotNumArr2 ===', notStringNotNumArr2);
