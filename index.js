//import "https://unpkg.com/navigo"  //Will create the global Navigo object used below
import "./navigo.js"; //Will create the global Navigo, with a few changes, object used below
//import "./navigo.min.js"  //Will create the global Navigo object used below
import { setActiveLink, loadHtml, renderHtml } from "./utils.js";

import { initMovies } from "./pages/movie-overview/movie-overview.js";
import { initMovieDetailed } from "./pages/movie-detailed/movie-detailed.js";
import { fetchMoviePoster } from "./pages/slider/slider.js";

window.addEventListener("load", async () => {
	const templateNotFound = await loadHtml("./pages/notFound/notFound.html");
	const allMovies = await loadHtml(
		"./pages/movie-overview/movie-overview.html"
	);
	const movieDetailed = await loadHtml(
		"./pages/movie-detailed/movie-detailed.html"
	);
	const slider = await loadHtml("./pages/slider/slider.html")

	const router = new Navigo("/", { hash: true });
	//Not especially nice, BUT MEANT to simplify things. Make the router global so it can be accessed from all js-files
	window.router = router;

	router
		.hooks({
			before(done, match) {
				setActiveLink("menu", match.url);
				done();
			},
		})
		.on({
			"/": () =>
				(document.getElementById("content").innerHTML = `
        <h2>Welcome, to the future of cinema</h2>
        <p>Noget mere text der sikkert er super godt :)</p>
        `),
			"/movies/:id": (params) => {
				const id = params.data.id;
				renderHtml(movieDetailed, "content");
				initMovieDetailed(id);
			},
			"/movies": () => {
				renderHtml(allMovies, "content");
				initMovies();
			},
			"/slider": () => {
				renderHtml(slider, "content");
				fetchMoviePoster();
			}
		})
		.notFound(() => {
			renderHtml(templateNotFound, "content");
		})
		.resolve();
});

window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
	alert(
		"Error: " +
			errorMsg +
			" Script: " +
			url +
			" Line: " +
			lineNumber +
			" Column: " +
			column +
			" StackTrace: " +
			errorObj
	);
};
