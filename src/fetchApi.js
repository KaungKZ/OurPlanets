const wtf = require("wtf_wikipedia");
import {
  planetSummarySource,
  loader,
  planetSummarySection,
  planetDetailSection,
  planetDetail,
  optionButtons,
  planetSummaryTitle,
} from "./selectors";
import { checkWhichOptionClicked, currentOption } from "./handleEvents";
import { planetValues, colors } from "./initValues";

export function fetchApi(_planet, planet) {
  return fetch(
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
      const summary = data[0].query.pages[0].extract;

      const internalStructureText = wtf(
        Object.values(data[1].parse.wikitext)[0]
      ).text();

      const atmosphereText = wtf(
        Object.values(data[2].parse.wikitext)[0]
      ).text();

      planetSummarySource.href = data[0].query.pages[0].fullurl;

      // document.body.style.height = "initial";
      // document.body.style.display = "initial";
      // document.body.style.flexDirection = "column";

      // loader.style.display = "none";
      // loader.style.pointerEvents = "none";

      // planetSummarySection.style.display = "block";
      // planetDetailSection.style.display = "block";

      planetValues.Summary = summary;
      planetValues.InternalStructure = internalStructureText;
      planetValues.Atmosphere = atmosphereText;

      changePlanetDetailByPlanet(data[3]);

      checkWhichOptionClicked(currentOption);
      changeContentByPlanet(planet);
    })
    .catch((err) => console.log(err));
}

function changePlanetDetailByPlanet(data) {
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

  planetDetail.forEach((detail, i) => {
    detail.innerHTML = values[i];
  });
}

export function changeContentByPlanet(planet) {
  optionButtons.forEach((btn) => {
    btn.style.backgroundColor = "transparent";

    if (btn.classList.contains("active")) {
      btn.style.backgroundColor = `${colors[planet]}`;
      btn.style.border = `1px solid rgb(56, 56, 79)`;
    }
  });

  planetSummaryTitle.innerHTML = planet;
}
