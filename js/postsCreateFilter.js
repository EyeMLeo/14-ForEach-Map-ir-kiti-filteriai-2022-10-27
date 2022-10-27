"use strict";
console.log("postsCreateFilter.js");

const postsData = [
  {
    title: "HTML",
    author: "James B.",
    year: 2022,
  },
  {
    title: "CSS",
    author: "Mike T.",
    year: 2012,
  },
  {
    title: "JS",
    author: "Jane D.",
    year: 2020,
  },
  {
    title: "HTML",
    author: "James B.",
    year: 2022,
  },
  {
    title: "CSS",
    author: "Mike T.",
    year: 2012,
  },
  {
    title: "JS",
    author: "Jane D.",
    year: 2020,
  },
];
// taikomes
const list1El = document.getElementById("list1");

const render = (arrOfPosts) => {
  // issivalyti generuojama konteineri
  list1El.innerHTML = "";
  console.log("render");
  arrOfPosts.forEach((pObj) => {
    // sukuriu elementa
    const newPostEl = createPostLi(pObj);
    // patalpinu elementa dom
    list1El.append(newPostEl);
  });
};

const createPostLi = (postObj) => {
  const liEl = document.createElement("li");
  liEl.className = "card";
  liEl.innerHTML = `
  <h3>${postObj.title}</h3>
  <h4>${postObj.author}</h4>
  <p><i>${postObj.year}</i></p>
  `;
  return liEl;
};
// const crEl = createPostLi(postsData[2]);
// console.log('crEl ===', crEl);
// list1El.append(crEl);

// 1. pasiimti reiksme is input
// 2. su reiksme filtruojam postsData pagal title (.includes)
// 3. is isfiltruoto masyvo generuojam postus su render()
// turi vykti funkcijoje kuria iskviesim mygtuko filter paspaudimu

render(postsData);

// 1. pasiimti reiksme is input

let FilterEl = document.getElementById("filter");
let filterBtnEl = document.getElementById("filterBtn");

// 1 ko ieskosiu, veliau pakeisiu
let wordISearch = "CSS";

// idet i event listeneri

// EVENT LISTENER PRADZIA
filterBtnEl.addEventListener("click", () => {
  // 2 sukuriu tuscia array kuris bus perrasomas ir pagal kuri atnaujinsiu html
  let searchedArray = postsData.filter((arrayElementIthink) =>
    arrayElementIthink.title
      .toLowerCase()
      .includes(FilterEl.value.toLowerCase())
  );
  // X perleidziu render funkcija su jau esamais filtrais ir array
  render(searchedArray);
});

// EVENT LISTENER PABAIGA

// uzpildau nauja array su paieska
// searchedArray = postsData.filter(ArrayElement.title.includes(wordISearch));
// console.log("searchedArray ===", searchedArray);
// render(???);

// 2. su reiksme filtruojam postsData pagal title (.includes)

// 3. is isfiltruoto masyvo generuojam postus su render()

//     // turi vykti funkcijoje kuria iskviesim mygtuko filter paspaudimu
// <https://teams.microsoft.com/l/message/19:_QMTbjYqDqM2VqyaRF3TikiMD1ITlegQHCz15fesiDM1@thread.tacv2/1666861314256?tenantId=08455b90-5d90-4a89-937b-8c2322b2c786&amp;groupId=a136d85b-b246-4217-9ff5-23f33d8a1f9b&amp;parentMessageId=1665374004855&amp;teamName=FEU2&amp;channelName=General&amp;createdTime=1666861314256&amp;allowXTenantAccess=false>
