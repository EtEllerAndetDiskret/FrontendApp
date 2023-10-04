//import "https://unpkg.com/navigo"  //Will create the global Navigo object used below
import "./navigo.js"; //Will create the global Navigo, with a few changes, object used below
//import "./navigo.min.js"  //Will create the global Navigo object used below
import { setActiveLink, loadHtml, renderHtml } from "./utils.js";
// Bare en template, da vi ikke har oprettet functionen initmovies endnu

window.addEventListener("load", async () => {
	const templateNotFound = await loadHtml("./pages/notFound/notFound.html");

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
