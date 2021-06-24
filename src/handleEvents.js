import svgImages from "../assets/*.svg";
import { fetchApi, changeContentByPlanet } from "./fetchApi";
import {
  loader,
  planetSummarySection,
  planetDetailSection,
  navLinks,
  optionButtons,
  planetImage,
  planetSummaryContent,
} from "./selectors";
import { planetValues } from "./initValues";
let currentPlanet = "Earth";
export let currentOption = "Overview";

export function handleClickNavLink(v) {
  document.body.style.height = "100vh";
  document.body.style.display = "flex";
  document.body.style.flexDirection = "column";

  loader.style.display = "flex";
  loader.style.pointerEvents = "all";
  loader.style.flex = "1";
  planetSummarySection.style.display = "none";
  planetDetailSection.style.display = "none";

  let planet = v.innerHTML;

  currentPlanet = planet;

  let _planet = planet === "Mercury" ? "Mercury_(planet)" : planet;

  toggleActiveNavLink(v);

  fetchApi(_planet, planet);
}

function toggleActiveNavLink(v) {
  navLinks.forEach((v) => {
    v.classList.remove("active");
  });

  v.classList.add("active");
}

function toggleActiveOptionBtn(v) {
  optionButtons.forEach((btn) => {
    btn.classList.remove("active");
  });

  v.classList.add("active");
}

export function handleChangeOption(v) {
  let _currentOption = v.dataset.value;

  currentOption = _currentOption;

  toggleActiveOptionBtn(v);
  changeContentByPlanet(currentPlanet);

  checkWhichOptionClicked(_currentOption);
}

export function checkWhichOptionClicked(value) {
  value = value.toLowerCase();
  // console.log(value);
  let _currentPlanet = currentPlanet.toLowerCase();

  if (value === "overview") {
    handleClickOverviewOption(_currentPlanet);
  } else if (value === "internal-structure") {
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
  planetImage.src = svgImages[`planet-${_currentPlanet}-internal`];
  planetSummaryContent.innerHTML =
    planetValues.InternalStructure.length > 350
      ? planetValues.InternalStructure.substring(0, 350).concat(" ...")
      : planetValues.InternalStructure;
}

function handleClickAtmosphereOption(_currentPlanet) {
  planetImage.src = svgImages[`planet-${_currentPlanet}-atmosphere`];
  planetSummaryContent.innerHTML =
    planetValues.Atmosphere.length > 350
      ? planetValues.Atmosphere.substring(0, 350).concat(" ...")
      : planetValues.Atmosphere;
}

export function handleResizeDocument() {
  if (window.innerWidth <= 768) {
    optionButtons[0].innerHTML = "Overview";
    optionButtons[1].innerHTML = "Structure";
    optionButtons[2].innerHTML = "Atmosphere";
  } else {
    optionButtons[0].innerHTML = "01: Overview";
    optionButtons[1].innerHTML = "02: Internal Structure";
    optionButtons[2].innerHTML = "03: Atmosphere";
  }
}
