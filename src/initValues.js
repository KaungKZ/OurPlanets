import { navLinks } from "./selectors";

export const initialActiveLink = "Earth";
export const getInitialActiveLink = [...navLinks].find(
  (link) => link.innerHTML === initialActiveLink
);

export const planetValues = {
  Summary: "",
  InternalStructure: "",
  Atmosphere: "",
};
export const colors = {
  Mercury: "rgba(65, 158, 187, 1)",
  Venus: "rgba(237, 162, 73, 1)",
  Earth: "rgba(109, 46, 213, 1)",
  Mars: "rgba(209, 76, 50, 1)",
  Jupiter: "rgba(216, 58, 52, 1)",
  Saturn: "rgba(205, 81, 32, 1)",
  Uranus: "rgba(30, 193, 162, 1)",
  Neptune: "rgba(45, 104, 240, 1)",
};
