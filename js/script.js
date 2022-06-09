"use strict";
const numberOfFilms = +prompt(' сколько фильмов вы просмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('оцените его', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('оцените его', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);