const movieURL = "http://localhost:8080/api/movies";

initMovies();
async function initMovies() {
	await loadMovies();
}

async function loadMovies() {
	const movies = await fetch(movieURL).then((res) => res.json());
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
                    
                        <a style="text-decoration:none" href=""><div class="banner" id="read-more">Læs mere</div></a>
                        <a style="text-decoration:none" href=""><div class="banner" id="find-ticket">Find billet</div></a>
                    </div>
                </div>
            </div>
            <p id="details">
                <b>Title:</b> ${movie.title} (${movie.year}) <br />
                <b>Genre: </b> ${movie.genre}
            </p>
        </div>
        `
	);
	const moviePreviewsAsString = moviePreviews.join(" ");
	document.getElementById("movies-container").innerHTML = moviePreviewsAsString;
}
