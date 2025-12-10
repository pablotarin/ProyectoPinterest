import { CardComponent } from "../CardComponent/CardComponent";
import { getAllPhotos, getPhotosByUsername } from "../../data/api";
import "./MainComponent.css";

export const MainComponent = async () => {
  const app = document.querySelector("#app");
  const photos = await getAllPhotos();

  const main = CardComponent(photos);

  const imgPinterest = document.querySelector('.pinterest');
  imgPinterest.addEventListener('click', () => {
    renderPhotos(photos);
  })

  const searchBar = document.querySelector("#search");
  searchBar.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter") {
      const query = searchBar.value.toLowerCase();
      const data = getPhotosByUsername(photos, query);
      renderPhotos(data);
      searchBar.value = "";
      searchBar.blur();
    }
  });

  app.append(main);
};

export const renderPhotos = (photos) => {
  const app = document.querySelector("#app");
  const mainRem = document.querySelector(".main");
  mainRem.remove();
  const main = CardComponent(photos);
  app.append(main);
};
