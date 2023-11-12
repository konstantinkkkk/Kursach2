const menu_btn = document.querySelector(".menu-btn");
const header__menu = document.querySelector(".header .header__menu");

const openMenu = () => {
    header__menu.classList.toggle('active');
    menu_btn.classList.toggle('active');
}

menu_btn.addEventListener('click' , openMenu);