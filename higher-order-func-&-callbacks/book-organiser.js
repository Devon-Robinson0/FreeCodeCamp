const books = [
  {
    title: "Mary Poppins",
    authorName: "Devon Robinson",
    releaseYear: 2025,
  },
  {
    title: "Mary Poppins ed.2",
    authorName: "Devon Robinson",
    releaseYear: 2019,
  },
  {
    title: "Mary Poppins ed.3",
    authorName: "Devon Robinson",
    releaseYear: 2015,
  }
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

const filteredBooks = books.filter(book => book.releaseYear <= 2020);

filteredBooks.sort(sortByYear);

console.log(filteredBooks)


