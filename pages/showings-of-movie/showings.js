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
	</div>
	<div id="poster-container">
		<img
			id="showing-poster"
			src="${movie.poster}"
		/>
	</div>
	`;
	setupDays(movie);
}

function setupDays(movie) {
	const processedDays = new Map(); // Use a Map to track processed days

	// Parse the date strings into Date objects before sorting
	const sortedShowings = movie.showings
		.map((showing) => ({
			//...showing is a spread operator, effectively creating a new object where the string representation of start has become a Date object
			...showing,
			start: new Date(showing.start),
		}))
		.sort((a, b) => a.start - b.start);

	console.log(sortedShowings);

	for (const showing of sortedShowings) {
		const start = showing.start;
		const dateKey = `${start.getDate()} / ${start.getMonth()}`;

		// Check if the date hasn't been processed yet
		if (!processedDays.has(dateKey)) {
			// Perform your action for this day
			addDivForDay(dateKey, showing);

			// Mark the day as processed in the Map
			processedDays.set(dateKey, true);
		}
		document.getElementById("day_" + dateKey).innerHTML += `
    <a href="#/showings/${showing.id}">
      <div class="nav-btn showing">
          ${start.getHours().toString().padStart(2, "0")}:${start
			.getMinutes()
			.toString()
			.padStart(2, "0")} <br />
          Sal ${showing.hallId}
      </div>
    </a>
      `;
	}
}

function addDivForDay(day, showing) {
	document.getElementById("schema-container").innerHTML += `
	<div class="day" id="day_${day}">${day}
    </div>`;
}
