const openBookModal = document.querySelector('#open-book-modal');
const darkmode = document.querySelector('#darkmode');
const modal = document.querySelector('#modal');


openBookModal.addEventListener('click', () => {
    modal.style.display = 'flex';
})

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }