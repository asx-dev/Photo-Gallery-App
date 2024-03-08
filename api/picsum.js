const API_URL = "https://picsum.photos/v2/list";

export const getImages = async (page = 1) => {
  try {
    const data = await fetch(`${API_URL}?page=${page}`);
    const photos = await data.json();
    return photos;
  } catch (error) {
    console.log(error);
  }
};

export const formatImage = (id, size) => {
  return `https://picsum.photos/id/${id}/${size}`;
};
