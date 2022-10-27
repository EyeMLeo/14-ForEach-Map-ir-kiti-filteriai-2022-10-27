'use strict';
console.log('map.js');

// array.map(function(currentValue, index, arr) {})
// array.map((currentValue, index, arr) => {})

// Array.prototype.map - skirtas pakeisti strukturai, grazina nauja masyva, tokio pat ilgio su tiek pat nariu masyva.

// taikomes
const list1El = document.getElementById('list1');

const nums = [1, -5, 2, 10, -4, 3];

const rez = nums.map((sk, i, arr) => {
  console.log(i, 'sk ===', sk);
  return sk;
});
console.log('rez ===', rez);
// gauti tokia strukrura const numsO = [{ id: 1 }, { id: 2 }, { id: 3 }];

const numsObjs = nums.map((sk) => {
  const newObjForArr = { id: sk };
  return newObjForArr;
});
// const numsObjs = nums.map((sk) => ({ id: sk }));
console.log('numsObjs ===', numsObjs);

// const numsLiArr = ['<li>1</li>', '<li>2</li>', '<li>3</li>'];
const numsLiArrFromMap = nums.map((sk) => {
  const liHtmlString = `<li>${sk}</li>`;
  return liHtmlString;
});
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]
console.log('numsLiArrFromMap ===', numsLiArrFromMap);
{
  /* 
<li>1</li>
<li>2</li>
<li>3</li> 
*/
}
const stringLis = numsLiArrFromMap.join('');
console.log(stringLis);
// list1El.innerHTML = stringLis;

// chain reaction
list1El.innerHTML = nums.map((sk) => `<li> skaicius ${sk}</li>`).join('');

// grazinti nauja masyva kuriam yra visos nums masyvo reiksmes pakeltos kvadratu
// sk ** 2
// const pakelta2 = nums.map((sk) => sk ** 2);
// console.log('pakelta2 ===', pakelta2);

// tik teigiamos reiksmes
// list1El.innerHTML = nums
//   .filter((sk) => sk > 0)
//   .map((sk) => `<li> skaicius ${sk}</li>`)
//   .join('');
