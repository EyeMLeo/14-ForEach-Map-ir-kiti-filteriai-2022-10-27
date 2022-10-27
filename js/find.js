'use strict';
console.log('find.js');

// array.find(function(currentValue, index, arr) {})
// const rastaReiksme = array.find((currentValue, index, arr) => {})
// i rastaReiksme gryzta reisme tada kai vidine funkcija grazina true. toliau nebeieskoma

// Array.prototype.find - skirtas surasti atrinkti viena reiksme pagal salyga.
// dazniausiai nenaudojamas pakeisti reiksmem

const nums = [1, -5, 2, 10, 1, -4, 3];

// surasti sk 2

const sk2 = nums.find((sk) => sk === -4);
// ar radom
if (sk2 !== undefined) {
  // radom
  console.log('radom sk2 ===', sk2);
}
console.log('sk2 ===', sk2);

const arrayOfObjects = [
  {
    title: 'HTML',
    author: 'James B.',
    year: 2022,
  },
  {
    title: 'CSS',
    author: 'Mike T.',
    year: 2012,
  },
  {
    title: 'JS',
    author: 'Jane D.',
    year: 2020,
  },
];

// surasti obj kurio title === CSS
// let foundPost = null;
// for (let post of arrayOfObjects) {
//   // console.log('post ===', post);
//   // console.log('post.title ===', post.title);
//   console.log('iteracija');
//   if (post.title === 'CSS') {
//     foundPost = post;
//     break;
//   }
// }
// find versija
// foundPost = arrayOfObjects.find((postObj) => postObj.title === 'CSS');
let foundPost = arrayOfObjects.find((postObj) => {
  if (postObj.title === 'CSS') {
    return true;
  }
});
// foundPost.found = true;
// console.log('foundPost ===', foundPost);

console.log('arrayOfObjects ===', arrayOfObjects);

// surasti arrayOfObjects posta kurio autoriaus reiksmeje yra 'Ja'

// ta pati panaudojam filter ir paziureti rezultatus
