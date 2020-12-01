
let numberOfFilms

function start() {
	 numberOfFilms = +prompt('How much is films your watches?', '')
	
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('How much is films your watches?', '')

	}
}

start()

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
}

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Last movie watched?',''),
			b = prompt('How much would you rate it?', '')

		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b
			console.log('Done')
		} else {
			console.log('Error')
			i--
		}
	}
}

rememberMyFilms()

function detectPersonalLevel() {
		if (personalMovieDB.count < 10) {
			alert('Watch small films')
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			alert('Your classic viewer')
		} else if (personalMovieDB.count >= 30) {
			alert('Your kinoman!')
		} else {
			alert('Error')
		}
}

detectPersonalLevel()

function showMyDB(hidden) {
		if (!hidden) {
			console.log(personalMovieDB)
		}
}

showMyDB(personalMovieDB.private)
