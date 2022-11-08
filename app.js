/* Imports */
import { renderTroll } from './render-utils.js';

/* Get DOM Elements */
const trollListEl = document.querySelector('.trolls');
const formEl = document.querySelector('form');
const elfHPEl = document.querySelector('#elf-hp');
const defeatedNumEl = document.querySelector('#defeated-number');

/* State */
const trolls = [
    { id: 1, name: 'Tom', hp: 3 },
    { id: 2, name: 'Bob', hp: 2 },
    { id: 3, name: 'Flob', hp: 1 },
];
/* Events */

/* Display Functions */
function displayTrolls() {
    trollListEl.textContent = '';

    for (let troll of trolls) {
        const trollEl = renderTroll(troll);
        trollListEl.append(trollEl);
    }
}

displayTrolls();
// (don't forget to call any display functions you want to run on page load!)
