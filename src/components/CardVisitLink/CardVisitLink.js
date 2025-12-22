import "./CardVisitLink.css";

export const CardVisitLink = (text, className) => {
  const a = document.createElement("a");

  a.textContent = text;
  a.classList.add(className);
  return a;
};
