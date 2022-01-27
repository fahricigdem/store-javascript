/**
 * OBJECTS
 */
let books = {
  book1: '1984',
  book2: 'Faust',
  book3: 'Fantastic Mr. Fox'
};

// add a new book to the books object
// using dot notation
books.book4 = 'Charlie and the Chocolate Factory';
// using square bracket notation
books['book5'] = 'New Hampshire in words and pictures';

// remove an book from the books object
delete books.book2;

// log the third book
console.log(books.book3);

// iterate over the books and log every single one
for (const key in books) {
  console.log(key + ' = ' + books[key]);
}

/**
 * ARRAYS
 */
let movies = ['Pulp Fiction', 'Inception', 'Call me by your name', 'Batman'];

// add a new movie to the array
movies.push('The Great Gatsby');

// remove the movie „Call me by your name“ from the movies object
const index = movies.indexOf('Call me by your name');
if (index > -1) {
  movies.splice(index, 1);
}

// log the first movie
console.log(movies[0]);

// iterate over the movies and log every single one 
for (const iterator of movies) {
  console.log(iterator);
}