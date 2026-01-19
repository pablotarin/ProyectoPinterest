import { CardComponent } from "../CardComponent/CardComponent";
import { firstSearch, getSearchPhotos } from "../../data/api";
import "./MainComponent.css";

const app = document.querySelector("#app");

export const MainComponent = async () => {
  const photos = await firstSearch();

  const main = CardComponent(photos);

  const imgPinterest = document.querySelector(".pinterest");
  imgPinterest.addEventListener("click", () => {
    renderPhotos(photos);
  });

  const searchBar = document.querySelector("#search");
  searchBar.addEventListener("keydown", async (ev) => {
    if (ev.key === "Enter") {
      const query = searchBar.value.toLowerCase();
      const data = await getSearchPhotos(query);
      renderPhotos(data);
      searchBar.value = "";
      searchBar.blur();
    }
  });

  app.append(main);
};

export const renderPhotos = (photos) => {
  const mainRem = document.querySelector(".main");
  mainRem.remove();
  const main = CardComponent(photos);
  app.append(main);
};
