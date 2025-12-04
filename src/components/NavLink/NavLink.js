import "./NavLink.css";

export const NavLink = ({ path, text }) => {
  const li = document.createElement("li");
  const a = document.createElement("a");

  li.classList.add("navLink");
  a.href = path;
  a.textContent = text;
  a.target = '_blank';

  if (text === "Inicio") {
    li.classList.add("inicio");
  }
  li.append(a);

  return li;
};
