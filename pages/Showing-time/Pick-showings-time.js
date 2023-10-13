import { API_URL } from "../../settings";

export async function initPickShowings(id) {
	
    const showing = await fetch(API_URL + "/showings"+id).then((res)=>
    res.json()
    );
	
	// Define a JavaScript object to store movie data
var movies = [
    {
        title: "Movie 1",
        showtimes: ["10:00 AM", "1:30 PM", "5:00 PM"]
    },
    {
        title: "Movie 2",
        showtimes: ["11:00 AM", "2:45 PM", "6:30 PM"]
    },
    {
        title: "Movie 3",
        showtimes: ["9:15 AM", "12:45 PM", "4:15 PM"]
    }
];

// Function to generate the HTML for the movie list
function generateMovieList() {
    var movieListElement = document.getElementById("movieList");

    movies.forEach(function(movie) {
        var movieDiv = document.createElement("div");
        movieDiv.innerHTML = "<h2>" + movie.title + "</h2><p>Showtimes: " + movie.showtimes.join(', ') + "</p>";
        movieListElement.appendChild(movieDiv);
    });
}

// Call the function to generate the movie list
generateMovieList();

}

