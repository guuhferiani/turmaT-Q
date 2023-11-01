const album = document.getElementById('album');
const buffet = document.getElementById('buffet');
const videoBuffet = document.querySelector('#videoBuffet');

const videoAlbum = document.querySelector('#videoAlbum');
const casamentos = document.getElementById('casamentos');
const videoCasamentos = document.querySelector('#videoCasamentos');


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