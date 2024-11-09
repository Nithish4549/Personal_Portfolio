const menu = document.querySelector('#menuicon');
const navLinks = document.querySelector('.nav-links');
const about = document.querySelector('a');
const education = document.querySelector('.ed');
const expereience = document.querySelector('#ex');
const project = document.querySelector('#pr');
const skills = document.querySelector('#sk');
const contact = document.querySelector('#cnt');


menu.addEventListener("click", function (event) {
    navLinks.classList.toggle('active') // Prevents the click from being detected by the document click event
})
