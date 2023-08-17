import axios from 'axios';
// import Notiflix from 'notiflix';
const BASE_URL = 'https://pixabay.com/api/';
const myApiKey = '38129087-a1875a38c8c49036313c55811';
let pageCounter = 1;
const perPage = 40;
export const fetchQuizzes = async value => {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      key: myApiKey,
      q: value,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: pageCounter,
      per_page: perPage,
    },
  });
  return response.data.hits;
};
