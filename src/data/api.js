import { createApi } from 'unsplash-js';

// Si usas Node.js > 18 o navegador
const unsplash = createApi({
  accessKey: 'YBYJ7kpuCBcqJm-gOqQIuMfFfSb5vFjMqb_xTaaWRQg',
});

export async function getAllPhotos() {
  const result = await unsplash.photos.list({
    page: 1,
    perPage: 30,
  });

  if (result.response) {
    return result.response.results;
  } else {
    return result.errors;
  }
}

export async function getPhotosByUsername(username) {
  const result = await unsplash.photos.list({
    page: 1,
    perPage: 30,
  });

  if (result.response) {
    const data = result.response.results;
    console.log(data);
    return data.filter((p) => p.user.name.toLowerCase().includes(username.toLowerCase()))
  } else {
    return [];
  }
}
