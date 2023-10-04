//import "https://unpkg.com/navigo"  //Will create the global Navigo object used below
import "./navigo.js"  //Will create the global Navigo, with a few changes, object used below
//import "./navigo.min.js"  //Will create the global Navigo object used below
import {
    setActiveLink, loadHtml, renderHtml} from "./utils.js"
    // Bare en template, da vi ikke har oprettet functionen initmovies endnu
    import {initMovies} from "./pages/movies/movies.js" 
import { Navigo } from "./navigo.js"x

  window.addEventListener("load", async() => {
    const templateMovies = await loadHtml("./pages/movies/movies.html")
    const templateNotFound = await loadHtml("./pages/notFound/notFound.html")
    
    const router = new Navigo("/", { hash: true });
  //Not especially nice, BUT MEANT to simplify things. Make the router global so it can be accessed from all js-files
  window.router = router

  router
    .hooks({
      before(done, match) {
        setActiveLink("menu", match.url)
        done()
      }
    })
    .on({
      "/movies": () => {
        renderHtml(templateMovies, "content")
        initMovies()
    }})
    .notFound(() => {
      renderHtml(templateNotFound, "content")
    })
    .resolve()
});

window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
    alert('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber
      + ' Column: ' + column + ' StackTrace: ' + errorObj);
  }

  