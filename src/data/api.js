import { createApi } from "unsplash-js";

// Si usas Node.js > 18 o navegador
const unsplash = createApi({
  accessKey: "YBYJ7kpuCBcqJm-gOqQIuMfFfSb5vFjMqb_xTaaWRQg",
});

export async function getAllPhotos() {
  let allPhotos = [];
  for (let page = 1; page <= 3; page++) {
    const result = await unsplash.photos.list({
      page: page,
      perPage: 30,
    });

    if (result.response) {
      allPhotos = allPhotos.concat(result.response.results);
    } else {
      return result.errors;
    }
  }
  return allPhotos;
}

export async function getPhotosByUsername(username) {
  const data = await getAllPhotos();
  return data.filter((p) =>
        p.user.name.toLowerCase().includes(username.toLowerCase())
      )
}

/* export async function getStatistics(photoId) {
  const result = await unsplash.photos.getStats({ photoId });

  if (result.response) {
    return result.response;
  } else {
    return [];
  }
} */
