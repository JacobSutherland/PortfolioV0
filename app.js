// deop down menu
const dropDownMenu = document.querySelector('svg:nth-of-type(1)');
const menuExit = document.querySelector('.exit');
const headerNav = document.querySelector('header nav');


dropDownMenu.addEventListener('click', () => {
    headerNav.classList.add('open');
} )

menuExit.addEventListener( 'click', () => {
    headerNav.classList.remove('open');
})