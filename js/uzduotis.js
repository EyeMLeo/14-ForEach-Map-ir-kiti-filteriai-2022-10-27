"use strict";
console.log("uzduotis.js");

// # uzd
// ```javascript

const nums = [-1, 5, 8, -20, 10, 12, -5, 14];
const colors = ["red", "green", "blue", "tomato"];

// ```
// ## LENGVESNI

// 1. atrinkti i nauja masyva skaicius didesnius uz 2
let nums1 = nums.filter((element) => element > 2);
console.log("nums1 ===", nums1);

// 2. grazinti nauja masyva kuriame reiksmes turetu 2 skaicius po kablelio.

let nums2 = nums.map((element) => element.toFixed(2));
console.log("nums2 ===", nums2);
// 3. is colors array grazinti nauja masyva su visu spalvu raidziu kiekiais
let colors3 = colors.map((element) => element.length);
console.log("colors3 ===", colors3);
// 4. is colors grazinti nauja masyva kuriame pries spalva butu prirasytas indexas.
let colors4 = colors.map((element, i) => `${i + 1} ${element}`);
console.log("colors4 ===", colors4);
// ## Tolimesni

// 1. atspausdinti html paragrafe visus skaicius  <p id="para"></p>
console.log(nums);

let pIcreated = document.getElementById("para");
let newnums = nums.map((el) => {
  pIcreated.insertAdjacentHTML("beforeend", `${el} `);
});
// 2. atspausdinti html h2 elemente visus padalintus is 10 - <h2 id="h2"></h2>
nums.map((el) => {
  document.getElementById("h2").insertAdjacentText("afterbegin", `${el} `);
});

// 3. gauti ir atspausdinti nauja masyva kuriame visos reiksmes butu padaugintos is 3
let times3 = nums.map((el) => {
  return el * 3;
  console.log(el);
});
console.log("times3 ===", times3);
// 4. gauti ir atspausdinti nauja masyva kuriame visos reiksmes padaugintos is ju indexo.
let numsTimesI = nums.map((el, i) => {
  return el * i;
});
console.log("numsTimesI ===", numsTimesI);
// 5. grazinti nauja masyva kuriame butu reikmes didesnes uz 9
let biggerThan9 = nums.filter((el, i) => {
  if (el > 9) {
    return el;
  }
});
console.log("biggerThan9 ===", biggerThan9);
// 6. grazinti ir atspausdinti consoleje visas neigiamas reiksmes
let allNegatives = nums.filter((el) => {
  if (el < 0) {
    return true;
  }
});
console.log("allNegatives ===", allNegatives);
// 6.1 is colors masyvo grazinti nauja masyva kuriame paskutine raide dizioji

let colorsB = colors.map((el, i) => {
  return el.slice(0, -1) + el.charAt(el.length - 1).toLocaleUpperCase();
});
console.log("colorsB ===", colorsB);
// 7. sukurti nauja masyva kuriame turetume masyva su objektais
// [
//   {value: -1},
//   {value: 5},
//   {value: 8}
//   {value: -20}
// ...
// ]

let numsValue = nums.map((el, i) => {
  let newEl = {};
  newEl["value"] = el;
  return newEl;
});
console.log("numsValue ===", numsValue);
// 8 extra(nebutinai forEach) padaryti kad paspaudus mygtuka <button id="btn">Daryk</button> mes imptume spalvas is color masyvo ir su jomis dazytume musu .container spalva. Jei daejom iki galo tai pradedam is naujo nuo pirmos spalvos
let darykBtn = document.getElementById("btn");

// 9 extra is nums gauti objekta
// {
// teigiami: [...]
// neigiami: [...]
// }
// ```

let plusMinus = nums.map((el, i, arr) => {
  if (el >= 0) {
    plusMinus["teigiami"]++;
  } else plusMinus["neigiami"]++;
});
