const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a90b076c3d230bfdbddc31218efc2cf5&1"

const IMG_PATH = "https://image.tmdb.org/t/p/w51280"

const SEARCH_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=a90b076c3d230bfdbddc31218efc2cf5&query="'


const form = document.getElementById("form")
const search = document.getElementById("search")
//test fetch request

//get initial movies

getMovies(API_URL)

async function getMovies (url) {
	const res = await fetch (url)
	const data = await res.json()
	console.log(data.results)
}

form.addEventListener("submit", (e) => {
	e.preventDefault()

	const searchTerm = search.value

	if(searchTerm && searchTerm !== ""){
		getMovies(SEARCH_URL + searchTerm)
		search.value = ""
	} else {
		window.location.reload()
	}
})