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
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({
        behavior: "smooth"
    });
}

const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {

    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return
    } else {
        scrollIntoView(link);
    }
})

//home의 contact btn누르면 contact section으로 이동하기
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView("#contact");
})