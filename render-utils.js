export function renderTroll(troll) {
    const trollEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const deadEl = document.createElement('p');
    const hpEl = document.createElement('p');

    trollEl.classList.add('troll');

    nameEl.textContent = troll.name;
    hpEl.textContent = troll.hp < 0 ? 0 : troll.hp;
    hpEl.id = `troll-hp-${troll.id}`;

    deadEl.id = `troll-id-${troll.id}`;
    deadEl.textContent = troll.hp > 0 ? '🧌' : '💀';

    if (troll.hp < 0) {
        troll.El.classList.add('defeated');
    }
    trollEl.append(nameEl, deadEl, hpEl);

    return trollEl;
}
