const movieURL = "http://localhost:8080/api/movies/imdbid/";
const chosenMovieID = "tt21807222";
initMovieDetailed();

async function initMovieDetailed() {
	const movie = await fetch(movieURL + chosenMovieID).then((res) => res.json());
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
					<p id="header-data">
						IMDb: ${movie.imdbRating}/10 <br />
						${movie.released} <br />
						${movie.runtime}
					</p>
				</div>
			</div>
		</div>
		<div id="poster-and-genre">
			<img
				id="poster"
				src=${movie.poster}
			/>
			<p>${movie.genre}</p>
			<p>Rating: ${movie.rated}</p>
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

/*
		<div id="title-header">
			<div id="background-and-title">
				<img
					id="blurred-img"
					src="https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg"
				/>
				<div id="blur-overlay"></div>
				<div id="text-area">
					<p id="title">Spider-Man: Across the Spider-Verse</p>
					<p id="header-data">
						IMDb: 8.7/10 <br />
						02 Jun 2023 <br />
						140 min
					</p>
				</div>
			</div>
		</div>
		<div id="poster-and-genre">
			<img
				id="poster"
				src="https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_SX300.jpg"
			/>
			<p>Animation, Action, Adventure</p>
			<p>Rating: PG</p>
		</div>
		<div id="bio">
			Miles Morales returns for the next chapter of the Oscar®-winning
			Spider-Verse saga, an epic adventure that will transport Brooklyn's
			full-time, friendly neighborhood Spider-Man across the Multiverse to join
			forces with Gwen Stacy and a new team of Spider-People to face off with a
			villain more powerful than anything they have ever encountered. <br />
			<br />
			Actors: Shameik Moore, Hailee Steinfeld, Brian Tyree Henry <br />
			Director(s): Joaquim Dos Santos, Kemp Powers, Justin K. Thompson<br />
			Writer(s): Phil Lord, Christopher Miller, Dave Callaham<br />
		</div>
	</div> */
