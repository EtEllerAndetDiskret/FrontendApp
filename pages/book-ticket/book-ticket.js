import { API_URL } from "../../settings.js";

import {initMovies} from "pages/movie-overview/movie-overview.js";
export async function initCalender() {
    await loadCalender();
}
export async function loadMovies(){
    await initMovies();
}

async function loadMovies(){
    const movies = await fetch(API_URL + "/movies").then((res) => res.json())
    .then(data =>{
        const filteredMovies = data.filter()
    })
    
}
const selectedDate = dateInput
const filteredMovies = movies.filter(movie => movie.dag == selectedDate)



async function loadCalender(){
    const calender = await fetch(API_URL + "/showings").then((res) => res.json());



document.addEventListener("DOMContentLoaded",function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const dateInput = document.querySelector("#date");

    const selectedDate = dateInput.value;


    console.log("Valgt dag", selectedDate)

    });
});
};
