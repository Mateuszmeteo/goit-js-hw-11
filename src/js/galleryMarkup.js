export {galleryMarkup}

const divEl = document.querySelector('.gallery')


function galleryMarkup(images) {
    const markup = images
    .map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) =>
        `<div class="photo-card">
          <a href="${largeImageURL}">
            <img class="photo-card-img" src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
            <div class="info">
              <p class="info-item">
                <b>Likes</b> ${likes}
              </p>
              <p class="info-item">
                <b>Views</b> ${views}
              </p>
              <p class="info-item">
                <b>Comments</b> ${comments}
              </p>
              <p class="info-item">
                <b>Downloads</b> ${downloads}
              </p>
            </div>
          </div>`
    )
    .join('')
    
    divEl.insertAdjacentHTML('beforeend', markup)
}



// divEl.innerHTML = markup // przy load-more nie dodaje nowych page tylko zastępuje stare