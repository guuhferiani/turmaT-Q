const album = document.getElementById('album');

const videoAlbum = document.querySelector('#videoAlbum');

album.addEventListener('click', () => {
    album.classList.toggle('active');
    videoAlbum.classList.toggle('active');
});
