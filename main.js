const openBookModal = document.querySelector('#open-book-modal');
const darkmode = document.querySelector('#darkmode');
const modal = document.querySelector('#modal');
const closeBookModal = document.querySelector('#book-form-close');
const cardContainer = document.querySelector('.booklist-wrapper');

/* Book form nodes*/
const bookForm = document.querySelector('#book-form')
const bookTitle = document.querySelector('#book-form-title');
const bookAuthor = document.querySelector('#book-form-author');
const bookPages = document.querySelector('#book-form-pages');
const bookDescription = document.querySelector('#book-form-description');
const bookRating = document.querySelectorAll('.book-rating');
const bookRead = document.querySelector('#book-form-read');
const bookSubmit = document.querySelector('#book-form-submit');

let booklist = [];

function Book(title, author, pages, description, rating=3, read, index) {
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
  appendBooksToDom()
  console.log('event happened')
  bookForm.reset();
}

function appendBooksToDom() {
  cardContainer.innerHTML = ''
  booklist.forEach(book => {
    createBookCard(book)
  })
}

function createBookCard(book) {
  const bookCard = document.createElement('div'); 
  bookCard.classList.add('book-card');

  const bookCardTitle = document.createElement('h2');
  bookCardTitle.classList.add('book-card-title');
  bookCardTitle.innerText = book.title;
  bookCard.append(bookCardTitle);

  const bookCardAuthor = document.createElement('p');
  bookCardAuthor.classList.add('book-card-author');
  bookCardAuthor.innerText = book.author;
  bookCard.append(bookCardAuthor);

  const bookCardPages = document.createElement('p');
  bookCardPages.classList.add('book-card-pages');
  bookCardPages.innerText = book.pages;
  bookCard.append(bookCardPages);

  const bookCardDescription = document.createElement('p');
  bookCardDescription.classList.add('book-card-description');
  bookCardDescription.innerText = book.description;
  bookCard.append(bookCardDescription);

  cardContainer.append(bookCard)
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


let testBooks = []