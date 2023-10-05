import { loadTemplate, renderTemplate } from "../utils.js"

import { index} from "./pages/index.html"

window.addEventListener("load", async () => {
    const templateFrontendApp = await loadTemplate("./frontendapp/index.html")
    
    document.getElementById("btns").onclick = handleButtonClicks
    renderTemplate(templateFrontendApp, "content")

    function handleButtonClicks(evt) {
        const target = evt.target
        const isMenuBtn = target.tagName === "BUTTON" && target.id.startsWith("menu-btn-movie")
        if (!isMenuBtn) {
            console.log("Not a menu button")
            return
        }
        if (target.id === "menu-btn-FrontendApp") {
            renderTemplate(templatePages, "content")
            index()
        }
       
        
    }
})
const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');


let slideIndex = 0;

function showSlides() {
    const slides = document.querySelector('.slides');
    slides.style.transform = `translateX(${-slideIndex * 1000}px)`;
}

function changeSlide(n) {
    slideIndex += n;
    const totalSlides = document.querySelectorAll('.slide').length;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    showSlides();
}

setInterval(() => {
    changeSlide(1);
}, 3000);
