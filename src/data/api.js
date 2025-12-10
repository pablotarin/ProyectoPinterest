import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "YBYJ7kpuCBcqJm-gOqQIuMfFfSb5vFjMqb_xTaaWRQg",
});

export async function getAllPhotos() {
  let allPhotos = [];
  /* Hecho en bucle por si se quieren pedir más páginas, por restricción en el número de peticiones por hora de Unsplash dejo solo 1 página */
  for (let page = 1; page <= 1; page++) {
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

export /* async */ function getPhotosByUsername(photos, username) {
  /* const data = await getAllPhotos(); */
  return photos.filter((p) =>
    p.user.name.toLowerCase().includes(username.toLowerCase())
  );
}

export async function getStatistics(photoId) {
  try {
    const result = await unsplash.photos.getStats({ photoId });

    if (result.response) {
      return result.response;
    } else {
      console.log(`No stats available for photo ${photoId}`);
      return [];
    }
  } catch (error) {
    console.error(`Error fetching statistics for photo ${photoId}:`, error);
    return [];
  }
}
