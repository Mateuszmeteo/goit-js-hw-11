import Notiflix from "notiflix";

import { searchPhoto } from "./js/searchPhoto";
import { galleryMarkup } from "./js/galleryMarkup";

console.log('uytf')

const btnLoad = document.querySelector('.load-more')
const formEl = document.getElementById('search-form')



let query = '';
let page = 1;
const perPage = 40;

formEl.addEventListener('submit', onSearchForm);
btnLoad.addEventListener('click', loadMorePhoto);

// btnLoad.classList.add('btn-hidden') //nie działa

function onSearchForm(e) {
  e.preventDefault();
  page = 1;
  query = e.currentTarget.searchQuery.value.trim();
  

  if (query === '') {
    alertEmpty();
    return;
  }

  searchPhoto(query, page, perPage)
    .then(({ data }) => {
      if (data.totalHits === 0) {
        alertNoFound();
      } else {
        galleryMarkup(data.hits);
        alertFound(data);
      }
    })
    .catch(error => console.log(error))
    .finally(() => {
      formEl.reset();
    });
}

function loadMorePhoto() {
  page += 1;

  searchPhoto(query, page, perPage)
    .then(({ data }) => {
      galleryMarkup(data.hits);

      const totalPages = Math.ceil(data.totalHits / perPage);

      if (page > totalPages) {
        alertEndSearch();
      }
    })
    .catch(error => console.log(error));
}

function alertFound(data) {
  Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
}

function alertEmpty() {
  Notiflix.Notify.failure('The search string cannot be empty. Please specify your search query.');
}

function alertNoFound() {
  Notiflix.Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.',
  );
}

function alertEndSearch() {
  Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
}



///////.................//////////////////................../////////////////

// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";


// const inputEl = document.querySelector('input[name = "searchQuery"]')
// const btnEl = document.querySelector('button[type = "submit"]')


// const divEl = document.querySelector('.gallery')
