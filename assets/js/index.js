const buttonMenu = document.querySelector('.main-menu__button');
const menuList = document.querySelector('.main-menu_phone .main-menu__list');
const spotlightContainer = document.querySelector('.spotlight-container');
const spotlight = document.querySelector('.spotlight');

let spotlightOff = false;

buttonMenu.addEventListener('click', (event) => {
    buttonMenu.classList.toggle('main-menu__button_close');
    menuList.classList.toggle('main-menu__list_hidden');
});

if (spotlightContainer && spotlight) {
    spotlightContainer.addEventListener('mousemove', (e) => {
        if (spotlightOff) {
            return;
        }

        const spotlightParams = spotlight.getBoundingClientRect();
        const w = spotlightParams.width;
        const h = spotlightParams.height;
        const t = e.pageY - spotlightParams.top;
        const l = e.pageX - spotlightParams.left;

        spotlight.style.backgroundImage = `radial-gradient(circle at ${l / w * 100}% ${t / h * 100}%, transparent 80px, rgba(0, 0, 0, 0.8) 120px)`;
    });

    spotlightContainer.addEventListener('dblclick', (e) => {
        spotlight.style.background = `transparent`;
        spotlightContainer.style.cursor = 'default';
        spotlightOff = true;
    });
}