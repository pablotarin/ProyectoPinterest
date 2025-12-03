import "./CardButton.css";

export const CardButton = () => {
  const a = document.createElement("a");

  a.textContent = "Visitar";
  a.classList.add("visitButton");

  return a;
};
