const openBookModal = document.querySelector('#open-book-modal');
const darkmode = document.querySelector('#darkmode');
const modal = document.querySelector('#modal');
const closeBookModal = document.querySelector('#book-form-close')


openBookModal.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeBookModal.addEventListener('click', () => {
    modal.style.display = 'none';
})

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }