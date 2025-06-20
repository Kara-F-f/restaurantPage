import homePage from './Home';
import menuPage from './Menu';
import contactPage from './Contact';
import './style.css'

const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const contactBtn = document.querySelector('.contact');
const content = document.querySelector('#content');

homePage();

homeBtn.addEventListener('click', ()=> {
    content.innerHTML = '';
    homePage();
});

menuBtn.addEventListener('click', ()=> {
    content.innerHTML = '';
    menuPage();
});

contactBtn.addEventListener('click', ()=> {
    content.innerHTML = '';
    contactPage();
});