import { API_URL } from "../../settings.js";

export async function initShowings(id) {
	const showings = await fetch(API_URL + "/showings/movie/" + id).then((res) =>
		res.json()
	);
	const movie = await fetch(API_URL + "/movies/imdbid/" + id).then((res) =>
		res.json()
	);
	console.log(movie);

	document.getElementById("showings-container").innerHTML = `
	<h1>See showings for: ${movie.title}</h1>
	<div id="schema-container">
		<div class="day">
			Idag
			<div class="showing">
				10:00 <br />
				Sal 1
			</div>
			<div class="showing">
				10:00 <br />
				Sal 1
			</div>
			<div class="showing">
				10:00 <br />
				Sal 1
			</div>
			<div class="showing">
				10:00 <br />
				Sal 1
			</div>
		</div>
		<div class="day">Imorgen</div>
	</div>
	<div id="poster-container">
		<img
			id="showing-poster"
			src="https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
		/>
	</div>
	`;
	setupDays(movie);
}

function setupDays(movie) {
	const processedDays = [];
	for (const showing of movie.showings) {
		const localDateTime = new Date(showing.start);
		const dateKey = localDateTime.toISOString().split("T")[0]; // Extract date part as a key

		// Check if the date hasn't been processed yet
		if (!processedDays[dateKey]) {
			// Perform your action for this day
			addDivForDay(dateKey);

			// Mark the day as processed
			processedDays[dateKey] = true;
		}
	}
}

function addDivForDay(day) {
	document.getElementById("schema-container").innerHTML += `
	<div class="day">${day}</div>`;
}
