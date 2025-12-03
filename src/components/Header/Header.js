import { getAllPhotos } from "../../data/api";
import { navLinks } from "../../data/navLinks";
import { CardComponent } from "../CardComponent/CardComponent";
import { renderPhotos } from "../MainComponent/MainComponent";
import { NavButton } from "../NavButton/NavButton";
import { NavLink } from "../NavLink/NavLink";
import { SearchBar } from "../SearchBar/SearchBar";
import "./Header.css";

export const Header = () => {
  const app = document.querySelector("#app");
  const header = document.createElement("header");

  const aPint = document.createElement("a");
  aPint.classList.add("pinterest");
  const img = document.createElement("img");
  img.src = "/src/assets/logoPinterest.png";
  img.alt = "Pinterest";
  aPint.append(img);
  header.append(aPint);

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  navLinks.forEach((navLink) => {
    ul.append(NavLink(navLink));
  });
  nav.append(ul);
  header.append(nav);

  header.append(SearchBar());

  header.append(NavButton({ src: "src/assets/campana.png", alt: "Campana" }));
  header.append(
    NavButton({ src: "src/assets/comments.png", alt: "Comentarios" })
  );

  const a = document.createElement("a");
  a.textContent = "D";
  a.classList.add("user");

  header.append(a);

  app.append(header);
};
