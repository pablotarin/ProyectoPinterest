import "./SearchBar.css";

export const SearchBar = () => {
  const div = document.createElement("div");
  const p = document.createElement("p");
  const input = document.createElement("input");

  p.textContent = "🔎";

  input.type = "text";
  input.placeholder = "Buscar";
  input.id = "search";

  div.classList.add("searchBar");

  div.append(p, input);

  return div;
};

