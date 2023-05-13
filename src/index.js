console.log('lokokok')

// import { searchPhoto } from "./js/searchPhoto";

import axios from "axios";
import Notiflix from "notiflix";

const inputEl = document.querySelector('input[name = "searchQuery"]')
// const inputEl = document.querySelector('#search-form input')
const btnEl = document.querySelector('button[type = "submit"]')
// const btnEl = document.querySelector('#search-form button')
const formEl = document.getElementById('search-form')
const divEl = document.querySelector('.gallery')


let page = 1;
let perPage = 40;
let arrPhoto = []


const featchPhoto = async () => {
  const API_URL = 'https://pixabay.com/api/';
  const paramsApi = await axios.get(API_URL, {
    params: {
      key: '36240096-2eba6952fadc15ce6318a051b',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      q: inputEl.value,
      per_page: perPage,
      page: page,
    }
  })
  return paramsApi
}


// console.log(featchPhoto)




const loadPhoto = () => {
  featchPhoto()
    .then(photo => {
      let result = photo.data.totalHits

      if(result === 0) {
        alert('faliure sorry please try again')
      }else if (result <= page * perPage) {
        alert('info')
      }else {
        alert('success hooray')
      }
    })
    .catch(err => alert('err alert'))
}




formEl.addEventListener('submit', (e) => {
  e.preventDefault()
  // console.log(inputEl.value)
  loadPhoto()
})



function searchPhoto(pictures) {
  const markup = pictures.data.hits
  arrPhoto.push(...markup)
  return arrPhoto 
    .map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) =>
        `<div class="photo-card">
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
            <div class="info">
              <p class="info-item">
                <b>Likes</b>${likes}
              </p>
              <p class="info-item">
                <b>Views</b>${views}
              </p>
              <p class="info-item">
                <b>Comments</b>${comments}
              </p>
              <p class="info-item">
                <b>Downloads</b>${downloads}
              </p>
            </div>
          </div>`
    )
    .join('')
}







// btnEl.addEventListener('click', (e) => {
//   e.preventDefault()
//   // const userValue = inputEl.value
//    console.log(inputEl.value)
// }) 




////............../////////////............//////////////

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const KEY = '36240096-2eba6952fadc15ce6318a051b';
// const param = 'imagine_type=photo&orientation=horizontal&safesearch=true';


// async function featchPhoto (query) {
//   return await axios.get(`?key=${KEY}&q=${query}&${param}`)
//   // return apiString
// }

// console.log(featchPhoto)

///////............//////////////////..................///////////////

// const featchPhoto = async (userValue) => {
//     const API_URL = 'https://pixabay.com/api/';
//     const KEY = '36240096-2eba6952fadc15ce6318a051b';
//     const userValue = inputEl.value;
//     // const valExp = 'dog'
//     // const userValue = valExp
//     const param = 'imagine_type=photo&orientation=horizontal&safesearch=true';

//     // const apiString = await fetch(`${API_URL}?key=${KEY}&q=${userValue}&${param}`)
//     // return apiString

//     return await axios.get(`${API_URL}?key=${KEY}&q=${userValue}&${param}`)
//         .then(response => response.json())
        
// }

// console.log(featchPhoto)


// featchPhoto()
//   .then(apiString => console.log(apiString))
//   .catch(err => console.error(err))


// function searchPhoto(pictures) {
//   const markup = data 
//     .map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) =>
//         `<div class="photo-card">
//             <img src="" alt="${tags}" loading="lazy" />
//             <div class="info">
//               <p class="info-item">
//                 <b>Likes</b>${likes}
//               </p>
//               <p class="info-item">
//                 <b>Views</b>${views}
//               </p>
//               <p class="info-item">
//                 <b>Comments</b>${comments}
//               </p>
//               <p class="info-item">
//                 <b>Downloads</b>${downloads}
//               </p>
//             </div>
//           </div>`
//     )
//     .join('')
//     divEl.innerHTML = markup;
// }










// webformatURL - link do małego obrazka.
// largeImageURL - link do dużego obrazka.
// tags - wiersz z opisem obrazka. Będzie pasować do atrybutu alt.
// likes - liczba “lajków”.
// views - liczba wyświetleń.
// comments - liczba komentarzy.
// downloads - liczba pobrań.

////////.................//////////////////

//  "Sorry, there are no images matching your search query. Please try again."


 //////////////..................////////////////








// Utwórz frontend aplikacji wyszukiwania i przeglądania obrazków według słów kluczowych. //





// bibl.////
// axios   notiflix


//async/await


//API Pixabay




// const featchPhoto = async (userValue) => {
//   const API_URL = 'https://pixabay.com/api/';
//   const KEY = '36240096-2eba6952fadc15ce6318a051b';
//   const userValue = inputEl.value;
//   // const valExp = 'dog'
//   // const userValue = valExp
//   const param = 'imagine_type=photo&orientation=horizontal&safesearch=true';

//   // const apiString = await fetch(`${API_URL}?key=${KEY}&q=${userValue}&${param}`)
//   // return apiString

//   return await axios.get(`${API_URL}?key=${KEY}&q=${userValue}&${param}`)
//       .then(response => response.json())
      
// }

// console.log(featchPhoto)




