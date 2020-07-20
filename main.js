'use strict';


//navbar 조절크기 조절
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark')
    }
});

//메뉴선택시 해당메뉴로 스크롤자동 이동하기
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {

    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return
    } else {
        console.log(event.target.dataset.link);
        const scrollTo = document.querySelector(link);
        scrollTo.scrollIntoView({
            behavior: "smooth"
        });
    }
})