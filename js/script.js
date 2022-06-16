"use strict";
// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt(' сколько фильмов вы просмотрели?', '');

//     while (numberOfFilms =='' || numberOfFilms ==null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt(' сколько фильмов вы просмотрели?', '');
//     }
// }
// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// function rememberMyfilms() {
//     for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('оцените его', '');
    
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }
    
// }

// rememberMyfilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("мало фильмов");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("отличный зритель");
//     }
//     else if (personalMovieDB.count >= 30) {
//         console.log("киноман");
//     }
//     else {
//     console.log("ERROR");
//     }
// }

// detectPersonalLevel();

// function ShowMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
    
// }

// ShowMyDB(personalMovieDB.privat);


// function writeYouGenres() {
//     for (let i = 1; i <= 3; i++){
//         personalMovieDB.genres[i - 1] = prompt(`ваш любимый жанр под номером ${i}`);
//     }
// }

// writeYouGenres();






////////////////////   MASSIVE ///////////////////////

// const arr = [2, 7, 8, 10, 6];
// console.log(arr.sort(compreNum));

// function compreNum(a, b) {
//     return a - b;
// }

// // arr[99] = 0;
// // console.log(arr);

// const str = prompt("", "");
// const product = str.split(", ");
// product.sort();
// console.log(product.join('; '));





// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} vnutri massiva ${arr} `);
    
// });



// arr.push(67);
// console.log(arr);
// arr.pop();
// console.log(arr);

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

///////////////////    END MASSIVE   ///////////////////////










///////////////////    TWO OBJECT   ///////////////////////

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;    /// !!!!!!  SSILKA 

// copy.a = 10;

// console.log(obj);
// console.log(copy);

// function copy(mainObj) {
//     let objCopy = {};
//     let key;

//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const number = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// }

// const newNumbers = copy(number);

// newNumbers.b = 10;


// console.log(newNumbers);
// console.log(number);



// const add = {
//     d: 17,
//     e: 20
// };

// console.log(Object.assign(number, add));


// const clone = Object.assign({}, add);
// clone.d = 20;
// console.log(add);
// console.log(clone);





// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 4;
// console.log(newArray);
// console.log(oldArray);


// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpres', 'livejornal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);






// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);





// const array = ["a", "b"];
// const newAarray = [...array];
// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = { ...q }; 

// console.log(newObj);




// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };

// function showExperience(plan) {
//     return console.log(personalPlanPeter.skills.exp);

// }

// showExperience();








 




 

///////////////////   END  TWO OBJECT   ///////////////////////























////////////////////   OBJECT ///////////////////////

// const option = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     model: {
//         BMV: 'X5',
//         Lada: 'kalina'
//     },
//     color: {
//         border: 'black',
//         bg:' red'
//     },
//     makeTest: function () {
//         console.log("test");
//     }
// };

// const { border, bg } = option.color;
// console.log(bg);

// option.makeTest();

// console.log(Object.keys(option).length);

// console.log(option.name);
// // delete option.name;
// console.log(option);
// let counter = 0;
// for (let key in option) {
//     if (typeof (option[key]) === 'object') {
//         for (let i in option[key]) {
//             console.log(`${option[key]}-----svoystvo ${i}, imeet znachenie ${option[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`svoystvo ${key}, imeet znachenie ${option[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

/////////////////////// END OBJECT /////////////////////////////



// function calculateVolumeAndArea(length) {
//     if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return "При вычислении произошла ошибка";
//     }

//     let volume = 0,
//         area = 0;
    
//     volume = length * length * length;
//     // length ** 3 - это тоже самое, что и выше или варианты через цикл.
//     // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
//     area = 6 * (length * length);

//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// console.log(calculateVolumeAndArea(6));

// Место для первой задачи





// function getTimeFromMinutes(Minutes) {
// // if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
// //         return "При вычислении произошла ошибка";
// //     }
//     let Hour = 0;
//     let str = '';
//     Hour = Math.trunc(Minutes / 60);
//     let Minut = Minutes - (Hour * 60);
    
//     return (`Hour - ${Hour}, Minutes - ${Minut}`);
// }

// console.log(getTimeFromMinutes(0));

// function maxt(a, b, c, d) {
//     // let maxFour = a;
//     // if (maxFour < b) {
//     //     maxFour = b;
//     // } else if
//     //     (maxFour < c) {
//     //     maxFour = c;
//     // } else if
//     //     (maxFour < d) {
//     //     maxFour = d;
//     // }
    
//     return (Math.max(a,b,c,d));
//     }
    
// console.log(maxt(165, 17, -221, 8));



// function fib(k) {
//     let arr = [];
//     arr [0] = 0;
//     arr [1] = 1;
//     let str = '0 1';
//     for (let i = 2; i < k; i++){
//         arr[i] = arr[i - 2] + arr[i - 1];
//         str += ` ${arr[i]}`;
//     }
//     return (str);
// }
// console.log(fib(19));

// function fib2(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }

//     return result;
// }

// fib(5)





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

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });
        console.log(str);
        return str;
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);



function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }

    return str;
}
showProgrammingLangs(personalPlanPeter);






// ///////////////////// ///////////////////
// ///////////////////// ///////////////////
// let str = '';
// const mass = [4, 5, 7, 8, 3, 5, 12];
// for (let i = 0; i < mass.length; i++){
//     str += `  ${i}--${mass[i]}--${mass}    |`;
     
// };
// mass[14] = 67;
// for (let value of mass) {
//     console.log(value);
// }

// mass.forEach(function(item, i, mass) {
//     console.log(`${item} - ${i} ---- ${mass}`);
// });
// ///////////////////// ///////////////////
// ///////////////////// ///////////////////













// ///////////////////// ///////////////////
// ///////////////////// ///////////////////

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';

//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//     arr.forEach(member => {
//         str += `${member} `
//     });

//     return str;
// }

// console.log(showFamily(family));

// ///////////////////// ///////////////////
// ///////////////////// ///////////////////





// ///////////////////// //////////////////
// ///////////////////// ///////////////////

// const family=['Peter', 'Ann', 'Alex', 'Linda'];
// function showFamily(arr) {
//     let str = `Семья состоит из: `;
//     if (arr != false || arr.lenght === 0 ) {
        
//         for (let i = 0; i < family.length; i++) {
//             str +=  `${arr[i]} `;
            
//         }
//         return str;
//     } else  {
//             str = `Семья пуста`;
//             return str;

//         }
//     }
// console.log(showFamily(family));

// ///////////////////// ///////////////////
// ///////////////////// ///////////////////




// mass.forEach(function(item, i, mass) {
//     console.log(`${item} - ${i} ---- ${mass}`);
// });







// ///////////////////// ///////////////////
// ///////////////////// ///////////////////

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
// let strCity = '';
// function standardizeStrings(arr) {
//     for (let i = 0; i < arr.length; i++){
//        strCity = `${arr.join('\n').toLowerCase()} `;
        
//     }
//     return strCity;
// }

// console.log(standardizeStrings(favoriteCities));

// ///////////////////// ///////////////////
// ///////////////////// ///////////////////






// ///////////////////// ///////////////////
// ///////////////////// ///////////////////

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toLowerCase())
//     })
// }

// standardizeStrings(favoriteCities);

// ///////////////////// ///////////////////
// ///////////////////// ///////////////////
