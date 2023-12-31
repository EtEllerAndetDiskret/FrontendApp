import { API_URL } from "../../settings.js";

export async function initMovieDetailed(id) {
	const chosenMovieID = id;
	const movie = await fetch(API_URL + "/movies/imdbid/" + chosenMovieID).then(
		(res) => res.json()
	);
	document.getElementById("movie-details").innerHTML = `
    <div id="title-header">
			<div id="background-and-title">
				<img
					id="blurred-img"
					src=${movie.poster}
				/>
				<div id="blur-overlay"></div>
				<div id="text-area">
					<p id="title">${movie.title}</p>
				</div>
			</div>
		</div>
		<div id="poster-and-genre">
		<p id="header-data">
			IMDb: ${movie.imdbRating}/10 <br />
			${movie.released} <br />
			${movie.runtime}
		</p>
			<img
				id="poster"
				src=${movie.poster}
			/>
			<p>${movie.genre}</p>
			<p>Rating: ${movie.rated}</p>
			<div id="find-btn-container">
				<a href="#/movies/${movie.imdbID}/showings"><div class="nav-btn" id="find-showings">Find showings</div></a>
			</div>
			</div>
		<div id="bio">
        ${movie.plot} <br />
			<br />
			Actors: ${movie.actors} <br />
			Director(s): ${movie.director}<br />
			Writer(s): ${movie.writer}<br />
		</div>
	</div>
    `;
}
