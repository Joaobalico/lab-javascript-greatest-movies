const movies = require('./data.js');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
  const directors = movies.map((movie) => {
    return movie.director;
  })
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    return movies.filter((movie) => { return (movie.director === 'Steven Spielberg' && 
    movie.genre.includes('Drama')) }).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {
  let avg = movies.reduce(function (acc, value) {
    if (typeof value.score === 'number') {
      return acc + value.score;
    } else {
      return acc;
    }
  }, 0)
  if (movies.length === 0) {
    return 0 ;
  }
  return Number((avg / movies.length).toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(array) {
  const dramaMovies = array.filter((movie) => {
   return movie.genre.includes('Drama');
  });

  if (!dramaMovies.length){
   return 0;
  };

  const averageDrama = dramaMovies.reduce((total, next) => {
   return (total + next.score);
  }, 0);

  return Number((averageDrama / dramaMovies.length).toFixed(2));
 }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  const sortedMov = [...movies].sort(function (acc, value) {
    if (acc.year !== value.year) {
      return acc.year - value.year;
    } else if (acc.year === value.year) {
      if (acc.title < value.title) {
        return -1;
      } else if (acc.title > value.title) {
        return 1;
      } else {
        return 0;
      }
    }
  })
  return sortedMov;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  const abcOrder = [...movies].sort(function (acc, value) {
    for (let i = 0; i <= 20; i++) {
      if (movies.length < 20) {
        return movies[i].title;
      }
      return movies[i].title;
    } if (movies.length > 20) {
      return 
    }
    if (acc.title < value.title) {
      return -1;
    } else if (acc.title > value.title) {
      return 1;
    } else {
      return 0;
    }
  })
  return abcOrder;
}

// console.log(movies[1].title) //'The Godfather'

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
