import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "YBYJ7kpuCBcqJm-gOqQIuMfFfSb5vFjMqb_xTaaWRQg",
});

export async function firstSearch() {
  let allPhotos = [];
  const result = await unsplash.photos.list({
    page: 1,
    perPage: 30,
  });

  if (result.response) {
    allPhotos = allPhotos.concat(result.response.results);
  } else {
    return result.errors;
  }
  return allPhotos;
}

export async function getSearchPhotos(query) {
  let allFilterPhotos = [];
  const result = await unsplash.search.getPhotos({ query });
  console.log(result.response);
  
  if (result.response) {
    allFilterPhotos = allFilterPhotos.concat(result.response.results);
  } else {
    return result.errors;
  }

  return allFilterPhotos;
}

export async function getStatistics(photoId) {
  try {
    const result = await unsplash.photos.getStats({ photoId });

    if (result.response) {
      return result.response;
    } else {
      console.log(`No stats available for photo ${photoId}`);
      return {
        downloads: { historical: { change: "-" } },
        views: { historical: { change: "-" } },
      };
    }
  } catch (error) {
    console.error(`Error fetching statistics for photo ${photoId}:`, error);
    return {
      downloads: { historical: { change: "-" } },
      views: { historical: { change: "-" } },
    };
  }
}
