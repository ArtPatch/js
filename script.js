const numberOfFilms = prompt(`Сколько фильмов вы уже посмотрели?`, ``);
const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

const lastMovie = prompt (`Какой последний фильм вы смотрели ?`, ``),
    score = prompt(`На сколько оцените его ?`, ``),
    lastMovie2 = prompt(`Какой последний фильм вы смотрели ?`, ``),
    score2 = prompt(`На сколько оцените его ?`, ``);

    personalMovieDB.movies[lastMovie] = score;
    personalMovieDB.movies[lastMovie2] = score2;

    console.log(personalMovieDB);