const album = document.getElementById('album');
const casamentos = document.getElementById('casamentos');
const buffet = document.getElementById('buffet');

const videoAlbum = document.querySelector('#videoAlbum');
const videoCasamentos = document.querySelector('#videoCasamentos');
const videoBuffet = document.querySelector('#videoBuffet');


album.addEventListener('click', () => {
    album.classList.toggle('active');
    videoAlbum.classList.toggle('active');
});
casamentos.addEventListener('click', () => {
    casamentos.classList.toggle('active');
    videoCasamentos.classList.toggle('active');
});
buffet.addEventListener('click', () => {
    buffet.classList.toggle('active');
    videoBuffet.classList.toggle('active');
});