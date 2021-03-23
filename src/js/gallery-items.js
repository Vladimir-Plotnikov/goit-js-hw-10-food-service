import galleryTpl from '../templates/gallery-items.hbs'
import galleryMenu from '../menu.json'


const theme = {
  light: 'light-theme',
  dark: 'dark-theme',
};

saveDataCheck();

const switcher = document.querySelector('.theme-switch__toggle')
const menuContainer = document.querySelector('.menu')
const cardsMarkup = createCardsMarkup(galleryMenu)
menuContainer.insertAdjacentHTML('beforeend', cardsMarkup)

function createCardsMarkup(galleryMenu) {
    return galleryMenu.map(galleryTpl).join('');
}


switcher.onclick = () => {
    if(switcher.checked) {
        localStorage.setItem('theme', theme.dark)
        document.body.classList.toggle(theme.dark)
        return
    }
    localStorage.setItem('theme', theme.light)
    document.body.classList.remove(theme.dark)
}

function saveDataCheck() {
    const saveData = localStorage.getItem('theme')
    if (saveData) {
        console.log(saveData);
        document.body.classList.add(saveData);
    }
}

