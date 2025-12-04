import { getStatistics } from "../../data/api";
import { ImageCardComponnent } from "../ImageCardComponent/ImageCardComponent";
import { UserCardComponent } from "../UserCardComponent/UserCardComponent";
import "./CardComponent.css";

export const CardComponent = (photos = []) => {
  return createPhotosDiv(photos);
};

const createPhotosDiv = (photos) => {
  const main = document.createElement("main");
  main.classList.add("main");
  if (photos.length > 0) {
    photos.forEach(async (photo) => {
      const article = document.createElement("article");

      const stats = await getStatistics(photo.id);

      const img = ImageCardComponnent({
        src: photo.urls.small,
        alt: photo.alt_description || "Imagen aleatoria",
        dataD: stats.downloads.historical.change || '-',
        dataV: stats.views.historical.change || '-',
      });

      const user = photo.user;
      const photoDate = new Date(photo.created_at);

      const div = UserCardComponent({
        userPhoto: user.profile_image.large,
        name: user.name,
        datePublish: photoDate.toLocaleDateString(),
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
