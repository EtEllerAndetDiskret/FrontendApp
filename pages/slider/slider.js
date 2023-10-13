import { API_URL } from "../../settings.js"; 
import "http://unpkg.com/swiper@7/swiper-bundle.min.js"

const url = `${API_URL}/movies`;

export async function fetchMoviePoster() {
  try{
    const data = await fetch(API_URL + '/movies').then(res => res.json());
    const swiperWrapper = document.querySelector('.swiper-wrapper');
  
    
    for(let i = 0; i < data.length; i++) {
      const movie = data[i];
      const posterUrl = movie.poster;
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');
      slide.innerHTML = `
        <img src="${posterUrl}" alt="Movie Poster">
      `;
      swiperWrapper.appendChild(slide);
    };
    
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    centeredSlides: true,
    initialSlide: 0,
    autoplay: {
      delay: 3000,
      direction: 'vertical',
      disableOnInteraction: false,
      loop: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,   
    }, 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      clickable: true,
    },
  });
  
  } catch(error) {
    console.error('Error fetching movie details:', error);
  
  }
}
 
fetchMoviePoster();