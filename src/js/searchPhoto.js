// API request //

import axios from "axios";

export { searchPhoto };


axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '36240096-2eba6952fadc15ce6318a051b';
const param = 'imagine_type=photo&orientation=horizontal&safesearch=true';


async function searchPhoto(query, page, perPage) {
  return await axios.get(`?key=${KEY}&q=${query}&${param}&page=${page}&per_page=${perPage}`)
}