import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const myApiKey = '38129087-a1875a38c8c49036313c55811';
const perPage = 12;
export const fetchQuizzes = async (value, page) => {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      key: myApiKey,
      q: value,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: perPage,
    },
  });

  return response.data;
};
