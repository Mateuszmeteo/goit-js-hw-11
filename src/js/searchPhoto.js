// API request //

import axios from "axios";

export { searchPhoto };

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '36240096-2eba6952fadc15ce6318a051b';

async function searchPhoto(query, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
  );
  return response;
}

