"use strike";


const numberOfFilms = +prompt('Скільки фільмів ви уже побачили?','');



const  personalMovieDB = {
   count : numberOfFilms,
    movies : {},
     actors : {},
      genres : [],
      privat : false
   };

//Task 1

for (let i = 1; i < 2; i++){

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '');
//Task 2
      if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
        personalMovieDB.movies[a] = b;
        console.log(done);
      } else {
          console.log ('ERror');
          i--;
    }
};
    