import * as bootstrap from "bootstrap";
const wtf = require("wtf_wikipedia");
import svgImages from "../assets/*.svg";

const optionButtons = document.querySelectorAll(".btn-option");
const planetDetail = document.querySelectorAll(".planet-detail__value");
const planetSummaryContent = document.querySelector(".planet-summary__content");
const planetSummarySource = document.querySelector(
  ".planet-summary__source-link"
);
const planetSummaryTitle = document.querySelector(".planet-summary__title");
const navLinks = document.querySelectorAll(".nav-link");
const planetImage = document.querySelector(".planet-summary__img");
const planetSummarySection = document.querySelector(".planet-summary");
const loaders = document.querySelectorAll(".loader");

// let isLoading = true;

// const planetDetailUrl =
//   "https://api.le-systeme-solaire.net/rest.php/bodies/earth";
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
  optionButtons.forEach((btn) => {
    btn.style.backgroundColor = "transparent";

    if (btn.classList.contains("active")) {
      btn.style.backgroundColor = `${colors[planet]}`;
      btn.style.border = `1px solid rgb(56, 56, 79)`;
    }
  });

  planetSummaryTitle.innerHTML = planet;
}

function toggleActiveNavLink(v) {
  navLinks.forEach((v) => {
    v.classList.remove("active");
  });

  v.classList.add("active");
}

function handleClickNavLink(v) {
  planetSummarySection.style.display = "none";

  let planet = v.innerHTML;

  currentPlanet = planet;

  let _planet = planet === "Mercury" ? "Mercury_(planet)" : planet;

  toggleActiveNavLink(v);

  fetch(
    `https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=${_planet}&prop=sections&disabletoc=1` // fetch sections to get indexes
  )
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      let _internalStructureIndex = data.parse.sections.find((one) =>
        one.line.toLowerCase().includes("internal")
      ).index;

      let _atmosphereIndex = data.parse.sections.find(
        (one) =>
          one.line.toLowerCase().includes("atmosphere") ||
          one.line.toLowerCase().includes("sphere")
      ).index;

      const urls = [
        `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=info|extracts&inprop=url&generator=search&formatversion=2&exsentences=3&exlimit=1&exintro=1&explaintext=1&gsrsearch=intitle:planet%20${_planet}&gsrlimit=1`,
        `https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=${_planet}&prop=wikitext&section=${_internalStructureIndex}&disabletoc=1`,
        `https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=${_planet}&prop=wikitext&section=${_atmosphereIndex}&disabletoc=1`,
        `https://api.le-systeme-solaire.net/rest.php/bodies/${planet}`,
      ];

      const requests = urls.map((url) => fetch(url));

      return Promise.all(requests);
    })
    .then((res) => {
      return Promise.all(res.map((r) => r.json()));
    })
    .then((data) => {
      console.log(data);
      // console.log(data[3]);

      const summary = data[0].query.pages[0].extract;

      const internalStructureText = wtf(
        Object.values(data[1].parse.wikitext)[0]
      ).text();

      const atmosphereText = wtf(
        Object.values(data[2].parse.wikitext)[0]
      ).text();

      loaders.forEach((loader) => {
        loader.classList.add("remove");
      });
      planetSummarySource.href = data[0].query.pages[0].fullurl;
      planetSummarySection.style.display = "block";

      planetValues.Summary = summary;
      planetValues.InternalStructure = internalStructureText;
      planetValues.Atmosphere = atmosphereText;

      changePlanetDetailByPlanet(data[3]);

      checkWhichOptionClicked(currentOption);
      changeContentByPlanet(planet, v);
    })
    .catch((err) => console.log(err));
}

function changePlanetDetailByPlanet(data) {
  // const allowed = ["aphelion", "sideralRotation", "avgTemp", "meanRadius"];

  // console.log(data.sideralRotation);

  data.sideralRotation = Math.abs(data.sideralRotation);

  let values = [
    data.aphelion > 1000000000
      ? `${(data.aphelion / 1000000000).toFixed(2)} bil km`
      : `${(data.aphelion / 1000000).toFixed(1)}mil km`,
    `${Math.floor(data.sideralRotation / 24)}d ${Math.floor(
      data.sideralRotation % 24
    )}hr ${Math.floor(
      60 * ((data.sideralRotation % 24) - Math.floor(data.sideralRotation % 24))
    )}m`,
    `${data.avgTemp - 273.5} &deg;C`,

    `${data.meanRadius.toFixed(1).toLocaleString()} KM`,
  ];

  // var hours = Math.floor(num / 60);
  // var minutes = num % 60;
  // return hours + ":" + minutes;

  // const awayFromSun = `${data.aphelion / 10000000} million km`;
  // const avgTemp = data.avgTemp;
  // const rotationTime = data.sideralRotation;
  // const size = data.meanRadius;

  //  K - 273.15 = C

  // const filteredValues = Object.keys(data)
  //   .filter((key) => allowed.includes(key))
  //   .reduce((obj, key) => {
  //     obj[key] = data[key];
  //     return obj;
  //   }, {});

  // console.log(filteredValues[0]);

  // console.log(rotationTime);

  // const [awayFromSun, rotationtime, avgTemp, size] = data;

  // awayFromSun;
  planetDetail.forEach((detail, i) => {
    detail.innerHTML = values[i];
  });
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

  toggleActiveOptionBtn(v);
  changeContentByPlanet(currentPlanet, v);

  checkWhichOptionClicked(currentOption);
}

function checkWhichOptionClicked(value) {
  value = value.toLowerCase();
  let _currentPlanet = currentPlanet.toLowerCase();

  if (value === "overview") {
    handleClickOverviewOption(_currentPlanet);
  } else if (value === "internalstructure") {
    handleClickInternalOption(_currentPlanet);
  } else {
    handleClickAtmosphereOption(_currentPlanet);
  }
}

function handleClickOverviewOption(_currentPlanet) {
  planetImage.src = svgImages[`planet-${_currentPlanet}`];
  planetSummaryContent.innerHTML = planetValues.Summary;
}

function handleClickInternalOption(_currentPlanet) {
  // console.log("internal");
  planetImage.src = svgImages[`planet-${_currentPlanet}-internal`];
  planetSummaryContent.innerHTML =
    planetValues.InternalStructure.length > 350
      ? planetValues.InternalStructure.substring(0, 350).concat(" ...")
      : planetValues.InternalStructure;
}

function handleClickAtmosphereOption(_currentPlanet) {
  // console.log("atmosphere");
  planetImage.src = svgImages[`planet-${_currentPlanet}-atmosphere`];
  planetSummaryContent.innerHTML =
    planetValues.Atmosphere.length > 350
      ? planetValues.Atmosphere.substring(0, 350).concat(" ...")
      : planetValues.Atmosphere;
}

navLinks.forEach((v) => {
  v.addEventListener("click", () => handleClickNavLink(v));
});

optionButtons.forEach((v) => {
  v.addEventListener("click", () => handleChangeOption(v));
});
