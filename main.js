'use strict'


// function: scrolling to selector
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}

// Make navbar transparent when it is on top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    // console.log(`navbarHeight: ${navbarHeight}`);

    if(window.scrollY >= navbarHeight){
        // console.log("window.scrollY > navbarHeight");
        navbar.classList.add('navbar--dark');
    }
    else{
        navbar.classList.remove('navbar--dark');
    }

});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if(link == null)
        return;

    scrollIntoView(link);
    
});

// Handle click on contact button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});

// make home fade out as the window scrolls down
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    home.style.opacity = 1- window.scrollY / homeHeight;
});

// show arrow up button when scrolling down
const arrowUpBtn = document.querySelector('.arrowup__button');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight/2){
        arrowUpBtn.classList.add('visible');
    }
    else{
        arrowUpBtn.classList.remove('visible');
    }
});

// handle click on the 'arrow up' btn
const handleArrowUp = ()=>{
    scrollIntoView('#home');
    arrowUpBtn.removeEventListener('click', handleArrowUp);
    setTimeout(() => {
        arrowUpBtn.addEventListener('click', handleArrowUp);
    }, 1000);
};

arrowUpBtn.addEventListener('click', handleArrowUp);