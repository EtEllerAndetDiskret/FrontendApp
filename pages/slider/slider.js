import { API_URL } from "../../settings.js"; 
import "http://unpkg.com/swiper@7/swiper-bundle.min.js"

const url = `${API_URL}/movies`;


export async function fetchMoviePoster() {
  try{
    const data = await fetch(API_URL + "/movies").then(res => res.json())
    const movie = data[0];
    document.getElementById("image-container").innerHTML = `
      
          <img 
          src=${movie.poster} ></img>
      
        `;
    }catch(error) {
          console.error('Error fetching movie details:', error);
        }

const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
loop: true,

    
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

}})}
