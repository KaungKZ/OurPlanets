import * as bootstrap from "bootstrap";
const wtf = require("wtf_wikipedia");

const optionButtons = document.querySelectorAll(".btn-option");
const planetDetail = document.querySelectorAll(".planet-detail__value");
const planetSummaryContent = document.querySelector(".planet-summary__content");
const planetSummarySource = document.querySelector(".planet-summary__source");
const planetSummaryTitle = document.querySelector(".planet-summary__title");
const navLinks = document.querySelectorAll(".nav-link");

const planetSummaryUrl = [
  "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=Jupiter&formatversion=2&exsentences=10&exlimit=1&explaintext=1",
];
const planetDetailUrl =
  "https://api.le-systeme-solaire.net/rest.php/bodies/earth";
const initialActiveLink = "Earth";
const getInitialActiveLink = [...navLinks].find(
  (link) => link.innerHTML === initialActiveLink
);

const planetValues = {
  Summary: "",
  InternalStructure: "",
  Atmosphere: "",
};
let currentPlanet = "Earth";
let currentOption = "Overview";
const colors = {
  Mercury: "rgba(65, 158, 187, 1)",
  Venus: "rgba(237, 162, 73, 1)",
  Earth: "rgba(109, 46, 213, 1)",
  Mars: "rgba(209, 76, 50, 1)",
  Jupiter: "rgba(216, 58, 52, 1)",
  Saturn: "rgba(205, 81, 32, 1)",
  Uranus: "rgba(30, 193, 162, 1)",
  Neptune: "rgba(45, 104, 240, 1)",
};

handleClickNavLink(getInitialActiveLink);
function changeContentByPlanet(planet, v) {
  // console.log(planet);
  optionButtons.forEach((btn) => {
    btn.style.backgroundColor = "transparent";

    if (btn.classList.contains("active")) {
      btn.style.backgroundColor = `${colors[planet]}`;
      btn.style.border = `1px solid rgb(56, 56, 79)`;
    }
  });

  // v.style.backgroundColor = `${colors[planet]}`;

  planetSummaryTitle.innerHTML = planet;
}

// console.log(getInitialActiveLink);

// (function initDisplay() {
//   let _planet = "Earth";

//   fetch(
//     `https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=${_planet}&prop=sections&disabletoc=1` // fetch sections
//   )
//     .then((data) => {
//       return data.json();
//     })
//     .then((data) => {
//       let _internalStructureIndex = data.parse.sections.find((one) =>
//         one.line.toLowerCase().includes("internal")
//       ).index;

//       let _atmosphereIndex = data.parse.sections.find((one) =>
//         one.line.toLowerCase().includes("atmosphere")
//       ).index;

//       const urls = [
//         `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&generator=search&formatversion=2&exsentences=3&exlimit=1&exintro=1&explaintext=1&gsrsearch=intitle:planet%20${_planet}&gsrlimit=1`,
//         `https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=${_planet}&prop=wikitext&section=${_internalStructureIndex}&disabletoc=1`,
//         `https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=${_planet}&prop=wikitext&section=${_atmosphereIndex}&disabletoc=1`,
//       ];

//       const requests = urls.map((url) => fetch(url));

//       return Promise.all(requests);
//     })
//     .then((res) => {
//       return Promise.all(res.map((r) => r.json()));
//     })
//     .then((data) => {
//       const summary = data[0].query.pages[0].extract;

//       const internalStructureText = wtf(
//         Object.values(data[1].parse.wikitext)[0]
//       ).text();

//       const atmosphereText = wtf(
//         Object.values(data[2].parse.wikitext)[0]
//       ).text();

//       planetValues.Summary = summary;
//       planetValues.InternalStructure = internalStructureText;
//       planetValues.Atmosphere = atmosphereText;

//       planetSummaryContent.innerHTML = summary;
//     })
//     .catch((err) => console.log(err));
// })();

function toggleActiveNavLink(v) {
  navLinks.forEach((v) => {
    // console.log(v);
    v.classList.remove("active");
  });

  v.classList.add("active");
}

function handleClickNavLink(v) {
  let planet = v.innerHTML;

  // console.log(currentOption);

  currentPlanet = planet;

  let _planet = planet === "Mercury" ? "Mercury_(planet)" : planet;

  changeContentByPlanet(planet, v);
  toggleActiveNavLink(v);
  // let _sectionIndex;
  fetch(
    // step 1 : get the sections of specifi page (title)

    `https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=${_planet}&prop=sections&disabletoc=1` // fetch sections
  )
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      // console.log(data);
      // step 2 : get the index and fetch from another url and get the content
      // console.log(data.parse.sections);
      let _internalStructureIndex = data.parse.sections.find((one) =>
        one.line.toLowerCase().includes("internal")
      ).index;

      let _atmosphereIndex = data.parse.sections.find(
        (one) =>
          one.line.toLowerCase().includes("atmosphere") ||
          one.line.toLowerCase().includes("sphere")
      ).index;

      const urls = [
        `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&generator=search&formatversion=2&exsentences=3&exlimit=1&exintro=1&explaintext=1&gsrsearch=intitle:planet%20${_planet}&gsrlimit=1`,
        `https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=${_planet}&prop=wikitext&section=${_internalStructureIndex}&disabletoc=1`,
        `https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=${_planet}&prop=wikitext&section=${_atmosphereIndex}&disabletoc=1`,
        `https://api.le-systeme-solaire.net/rest.php/bodies/${_planet}`,
      ];

      const requests = urls.map((url) => fetch(url));

      return Promise.all(requests);
    })
    .then((res) => {
      return Promise.all(res.map((r) => r.json()));
    })
    .then((data) => {
      // console.log(data);

      // let text = Object.values(data[1].parse.wikitext);

      // console.log(text[0]);
      const summary = data[0].query.pages[0].extract;

      const internalStructureText = wtf(
        Object.values(data[1].parse.wikitext)[0]
      ).text();

      const atmosphereText = wtf(
        Object.values(data[2].parse.wikitext)[0]
      ).text();

      planetValues.Summary = summary;
      planetValues.InternalStructure = internalStructureText;
      planetValues.Atmosphere = atmosphereText;

      // console.log(planetValues, currentOption);

      checkOptionClicked(currentOption);

      // planetSummaryContent.innerHTML = planetValues[currentOption];

      //
      // const text = htmlToText(Object.values(data.parse.text));

      // console.log(text);
    })
    .catch((err) => console.log(err));
}

function toggleActiveOptionBtn(v) {
  optionButtons.forEach((btn) => {
    btn.classList.remove("active");
  });

  v.classList.add("active");
}

function handleChangeOption(v) {
  let value = v.innerHTML;

  currentOption = value.split(": ")[1].replace(/\s/g, "");

  // console.log(v);
  toggleActiveOptionBtn(v);
  changeContentByPlanet(currentPlanet, v);

  checkOptionClicked(value);
}

function checkOptionClicked(value) {
  if (value.toLowerCase().includes("overview")) {
    handleClickOverviewOption();
  } else if (value.toLowerCase().includes("internal")) {
    handleClickInternalOption();
  } else {
    // console.log("xi");
    handleClickAtmosphereOption();
  }
}

function handleClickOverviewOption() {
  planetSummaryContent.innerHTML = planetValues.Summary;
}

function handleClickInternalOption() {
  planetSummaryContent.innerHTML =
    planetValues.InternalStructure.length > 300
      ? planetValues.InternalStructure.substring(0, 300).concat(" ...")
      : planetValues.InternalStructure;
}

function handleClickAtmosphereOption() {
  // console.log(planetValues);
  planetSummaryContent.innerHTML =
    planetValues.Atmosphere.length > 300
      ? planetValues.Atmosphere.substring(0, 300).concat(" ...")
      : planetValues.Atmosphere;

  // planetSummaryContent.innerHTML = planetValues.atmosphere;
}

navLinks.forEach((v) => {
  v.addEventListener("click", () => handleClickNavLink(v));
});

optionButtons.forEach((v) => {
  v.addEventListener("click", () => handleChangeOption(v));
});

// function displayEarth() {}

// function displayJupiter () {}
