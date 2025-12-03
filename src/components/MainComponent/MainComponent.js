import { CardComponent } from "../CardComponent/CardComponent";
import { getAllPhotos, getPhotosByUsername } from "../../data/api";
import "./MainComponent.css";

export const MainComponent = async () => {
  const app = document.querySelector("#app");
  const photos = await getAllPhotos();

  const main = CardComponent(photos);

  const searchBar = document.querySelector("#search");
  searchBar.addEventListener("input", async () => {
    const query = searchBar.value.toLowerCase();
    const data = await getPhotosByUsername(query);
    renderPhotos(data);
  });

  app.append(main);
};

const renderPhotos = (photos) => {
  const app = document.querySelector("#app");
  const mainRem = document.querySelector('.main');
  mainRem.remove();
  const main = CardComponent(photos);
  app.append(main);
};
