/* Imports */
import { renderTroll } from './render-utils.js';

/* Get DOM Elements */
const trollListEl = document.querySelector('.trolls');
const formEl = document.querySelector('form');
const elfHPEl = document.querySelector('#elf-hp');
const defeatedNumEl = document.querySelector('#defeated-number');
const elfImgEl = document.querySelector('#elf-img');

/* State */
let trolls = [
    { id: 1, name: 'Tom', hp: 3 },
    { id: 2, name: 'Bob', hp: 2 },
    { id: 3, name: 'Flob', hp: 1 },
];
let currentId = 4;
let elfHP = 10;
let defeatedCount = 0;

/* Events */
formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(formEl);

    const newTroll = {
        id: currentId,
        name: data.get('troll-name'),
        hp: Math.ceil(Math.random() * 5),
    };
    currentId++;

    trolls.push(newTroll);

    displayTrolls();
});

function trollClickHandler(troll) {
    if (troll.hp <= 0) return;
    if (elfHP === 0) return;

    if (Math.random() < 0.33) {
        troll.hp--;
        alert('You attacked ' + troll.name);
    } else {
        alert('You failed at attacking ' + troll.name);
    }

    if (Math.random() < 0.5) {
        elfHP--;
        alert(troll.name + ' attacked you');
    } else {
        alert(troll.name + ' tried to attack you but failed');
    }

    if (troll.hp === 0) {
        defeatedCount++;
    }

    if (elfHP === 0) {
        elfImgEl.classList.add('game-over');
        alert('game over');
    }

    elfHPEl.textContent = elfHP;
    defeatedNumEl.textContent = defeatedCount;

    const hpEl = document.getElementById(`troll-hp-${troll.id}`);
    hpEl.textContent = troll.hp < 0 ? 0 : troll.hp;

    const deadEl = document.getElementById(`troll-${troll.id}`);
    deadEl.textContent = troll.hp > 0 ? '🧌' : '💀';
}

/* Display Functions */
function displayTrolls() {
    trollListEl.textContent = '';

    for (let troll of trolls) {
        const trollEl = renderTroll(troll);
        trollEl.addEventListener('click', () => {
            trollClickHandler(troll);
        });
        trollListEl.append(trollEl);
    }
}

displayTrolls();
// (don't forget to call any display functions you want to run on page load!)
