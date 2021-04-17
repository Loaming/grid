window.addEventListener('DOMContentLoaded', () => {

    let btn1 = document.querySelector(".btn-menu-1"),
        btn2 = document.querySelector(".btn-menu-2"),
        nav = document.querySelector(".nav"),
        navMenu = document.querySelector(".nav-mob-menu"),
        menu = document.querySelector(".mob-menu");
  
  let menuClick = () => {
    btn1.classList.toggle('close');
    btn2.classList.toggle('open');
    nav.classList.toggle('nav-op');
    navMenu.classList.toggle('open-nav');
    if ( btn1.classList.contains('close')) {
      document.body.style.overflow='hidden';
    } else {
      document.body.style.overflow='auto';
    }
  };
  menu.addEventListener('click', menuClick)
  
  })