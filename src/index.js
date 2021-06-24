import * as bootstrap from "bootstrap";
import {
  handleClickNavLink,
  handleChangeOption,
  handleResizeDocument,
} from "./handleEvents";
import { getInitialActiveLink } from "./initValues";
import { navLinks, optionButtons } from "./selectors";

handleClickNavLink(getInitialActiveLink);

(function initForCss() {
  return handleResizeDocument();
})();

window.onload = () => {
  document.body.style.display = "flex";
};

navLinks.forEach((v) => {
  v.addEventListener("click", () => handleClickNavLink(v));
});

optionButtons.forEach((v) => {
  v.addEventListener("click", () => handleChangeOption(v));
});

window.addEventListener("resize", handleResizeDocument, true);
