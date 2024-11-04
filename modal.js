const modalContainer = document.getElementById('modal-container');
const modalBtn = document.getElementById('modal-btn');
const closeBtn = document.getElementById('close-button');
const okBtn = document.getElementById('ok-btn');
const overlay = document.getElementById('overLay');

function openModal() {
    modalContainer.classList.add('active');
    overlay.classList.add('active');
    overlay.style.backgroundColor = 'rgba(128, 128, 128, 0.329)';
}

function closeModal() {
    modalContainer.classList.remove('active');
    overlay.classList.remove('active');
    overlay.style.backgroundColor = 'transparent';
}

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
okBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal);