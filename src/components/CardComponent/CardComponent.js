/* import { getStatistics } from "../../data/api"; */
import { ImageCardComponnent } from "../ImageCardComponent/ImageCardComponent";
import { UserCardComponent } from "../UserCardComponent/UserCardComponent";
import "./CardComponent.css";

export const CardComponent = (photos = []) => {
  return createPhotosDiv(photos);
};

const createPhotosDiv = (photos) => {
  const main = document.createElement("main");
  main.classList.add("main");
  /* const data = await getPhotos(num); */
  if (photos.length > 0) {
    photos.forEach(async (photo) => {
      const article = document.createElement("article");

      const img = ImageCardComponnent({
        src: photo.urls.small,
        alt: photo.alt_description || "Imagen aleatoria",
      });

      const user = photo.user;
      const photoDate = photo.created_at.slice(0, 10);

      const div = UserCardComponent({
        userPhoto: user.profile_image.large,
        name: user.name,
        datePublish: photoDate,
        color: photo.color,
      });

      article.append(img, div);
      main.append(article);
    });
  } else {
    const notFound = document.createElement("h3");
    notFound.textContent = "No se ha encontrado nada";
    notFound.classList.add("notFound");
    main.append(notFound);
  }

  return main;
};
