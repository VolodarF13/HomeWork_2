"use strike";

//Task 1
const numberOfFilms = +prompt('Скільки фільмів ви уже побачили?','');


//Task 2
const  personalMovieDB = {
   count : numberOfFilms,
    movies : {},
     actors : {},
      genres : [],
      privat : false
   };

//Task 3

for (let i = 1; i < 2; i++){

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),

      if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
        console.log(done);
      } else {
          console.log ('ERror');
          i--;
    }
};
    