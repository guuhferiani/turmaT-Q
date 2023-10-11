// tres constantes para referenciar as "ITEM" divs Projetos
const form = document.getElementById('formulario');
const site = document.getElementById('site');
const port = document.getElementById('portifolio');
const movieform = document.querySelector('.movieform');
const moviesite = document.querySelector('.moviesite');
const movieport = document.querySelector('.movieport');


// evento de click
form.addEventListener("click",() => {
    form.classList.toggle('active');
    movieform.classList.toggle('active');
});
site.addEventListener("click",() => {
    site.classList.toggle('active');
    moviesite.classList.toggle('active');
});
port.addEventListener("click",() => {
    port.classList.toggle('active');
    movieport.classList.toggle('active');
});