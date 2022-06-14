"use strict";
let numberOfFilms;

function start() { 
    numberOfFilms = +prompt(' сколько фильмов вы просмотрели?', '');

    while (numberOfFilms =='' || numberOfFilms ==null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt(' сколько фильмов вы просмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
12

function rememberMyfilms() {
    for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('оцените его', '');
    
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log ('done')
    } else {
        console.log('error');
        i--;
    }
}
    
}

rememberMyfilms();

function detectPersonalLevel() { 
    if (personalMovieDB.count < 10) {
        console.log("мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("отличный зритель");
    }
    else if (personalMovieDB.count >= 30) {
        console.log("киноман");
    }
    else {
    console.log("ERROR"); 
    }
}

detectPersonalLevel();

function ShowMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
    
}

ShowMyDB(personalMovieDB.privat);


function writeYouGenres() {
    for (let i = 1; i <= 3; i++){ 
        personalMovieDB.genres[i - 1] = prompt(`ваш любимый жанр под номером ${i}`);
    }
}

writeYouGenres();




// console.log(personalMovieDB);

// function calc(a, b) {1
//     let c = (a + b) * 100;
//     return (c);
// }

// console.log(calc(18, 2));
// console.log('helllo');


// function ShowText(text) {
//     console.log('вот еовый текст - ' + text);
// }

// ShowText("Error");


// function ret() {
//     let num = 550;
//     return (num);
// }
// const ShowNum = ret();
// console.log(ShowNum);



// function sayHello(userName) {
//     console.log("Привет, " + userName);

// }
// sayHello("Max");

// // Место для второй задачи
// function returnNeighboringNumbers(Number) {
//     let arr =[];
//     arr[0]= Number - 1;
//     arr[1]= Number;
//     arr[2]= Number + 1;

// return arr;    
// }
// console.log(returnNeighboringNumbers(9));


// Место для третьей задачи


// function getMathResult(numberOne, numberTwo) {
//     let str ='';
//     for (let i = 1; i <= numberTwo; i++) {
//         if (i == numberTwo) {
//             str += ` ${numberOne * i}`;
            
//         } else {
//             str += ` ${numberOne * i}---`;
//         }
//     }
//     return str;
// }

// console.log(getMathResult(5, 19));



// const str = "Hello World";
// // console.log(str.indexOf("rl"));
// //  console.log(str.slice(1, 2));
// // console.log(str.substring(6, 9));
// // console.log(str. substr(3,10));
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());


// const num = 12.6;
// console.log(Math.round(num));

// const test = "12.28ux";
// console.log(parseInt(test));
// console.log(parseFloat(test));
















// console.log(NaN || 2 || undefined);
// console.log(NaN && 2 && undefined);
// console.log(1 && 2 && 3);
// console.log(!1 && 2 && !3);
// console.log(25 || null && !3);
// console.log(NaN || null || !3 || undefined || 5);
// console.log( NaN || null && !3 && undefined || 5);
// console.log(null && !3 && undefined);
// console.log( 5 === 5 && 3 > 1 || 5);


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }








// let result = '';
// const leght = 7;

// for (let i = 1; i < leght; i++){
//     for (let j = 0; j < i; j++ ){
//         result += "*";

//     }
    
//     result += '\n';
// }
// console.log(result);
//   for (let i = 5; i < 11; i++) {
//         console.log(i);
// }
    






// function secondTask() {
//     // Пишем решение вот тут
//       for (let i = 2; i < 11; i = i+2) {
//         console.log(i);
    
//     }







// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)

    