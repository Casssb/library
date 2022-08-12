const openBookModal = document.querySelector('#open-book-modal');
const darkmode = document.querySelector('#darkmode');
const modal = document.querySelector('#modal');
const closeBookModal = document.querySelector('#book-form-close');

/* Book form nodes*/
const bookForm = document.querySelector('#book-form')
const bookTitle = document.querySelector('#book-form-title');
const bookAuthor = document.querySelector('#book-form-author');
const bookPages = document.querySelector('#book-form-pages');
const bookDescription = document.querySelector('#book-form-description');
const bookRating = document.querySelectorAll('.book-rating');
const bookRead = document.querySelector('#book-form-read');
const bookSubmit = document.querySelector('#book-form-submit');

const booklist = [];

function Book(title, author, pages, description, rating, read, index) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.description = description;
  this.rating = rating;
  this.read = read;
  this.index = index;
}

function addToBooklist() {
  let bookIndex = booklist.length;
  let book = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    bookDescription.value,
    getRating(),
    bookRead.checked,
    bookIndex
  );
  booklist.push(book)
  console.log('event happened')
  bookForm.reset();
}

function appendBooksToDom() {

}

function createBookCard() {
  
}

function getRating() {
  let rating;
  bookRating.forEach(radio => {
    if(radio.checked) {
      rating = radio.value;
    }
  })
  return rating;
}

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addToBooklist()
  modal.style.display = 'none'
});

openBookModal.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeBookModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
