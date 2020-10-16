import { getFromLocalStorage, setInLocalStorage } from './app-utils.js';
import data from './data.js';


// import functions and grab DOM elements


const form = document.getElementById('form');


// initialize state

// set event listeners to update state and DOM

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);


    //Build user state object
    const userObject = {
        name: formData.get('name'),
        bike: formData.get('bike-type'),
        fatigue: 50,
        tips: 0,
        completed: {}
    };


    setInLocalStorage('userData', userObject);




    window.location = './questpage';
});

