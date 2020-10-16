import { getFromLocalStorage, setInLocalStorage } from './app-utils.js';


// import functions and grab DOM elements
const name = document.getElementById('name');
const bikeType = document.querySelectorAll(':checked');
const form = document.getElementById('form');


// initialize state

// set event listeners to update state and DOM

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('test');
    window.location = './questpage';
});

setInLocalStorage('this', 'this');