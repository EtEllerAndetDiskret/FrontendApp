import { API_URL } from "../../settings.js";

initShowings(1)

export async function initShowings(id){
    const movie = await fetch(API_URL + "/showings/movie/" + id).then(res => res.json());
    console.log(movie)
}