const padlOrel = Math.random() < 0.5;
const vysledekElement = document.querySelector('.vysledek');

if (padlOrel) {
    vysledekElement.textContent = 'Padl orel';
} else {
    vysledekElement.textContent = 'Padla pana';};

const hodMinci = document.querySelector('.mince')

if (padlOrel) {
    hodMinci.classList.add ('mince--orel');
} else {
    hodMinci.classList.add ('mince--panna');}
