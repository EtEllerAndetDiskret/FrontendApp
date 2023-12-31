import { API_URL } from "../../settings.js";

export async function initMovies() {
	await loadMovies();
}


async function loadMovies() {
	const movies = await fetch(API_URL + "/movies").then((res) => res.json());
	console.log(movies);
	const moviePreviews = movies.map(
		//TODO: [KINO-36] When navigo router is set up, the links should be done via router and eventbubling
		(movie) => `
			<div class="movie-preview">
            <div id="img-container">
                <img
                    src=${movie.poster}
                />
                <div id="blur-overlay">
                    <div id="banner-container">
                        <a href="#/movies/${movie.imdbID}"><div class="banner" id="read-more">Read more</div></a>
                        <a href="#/movies/${movie.imdbID}/showings/"><div class="banner" id="find-ticket">Find showings</div></a>
                    </div>
                </div>
            </div>
            <p id="details">
                <b>${movie.title} (${movie.year}) </b><br />
                ${movie.genre}
            </p>
        </div>
        `
	);
	const moviePreviewsAsString = moviePreviews.join(" ");
	document.getElementById("movies-container").innerHTML = moviePreviewsAsString;
}
