'use strict'

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

    navbarMenu.classList.remove('open');
    scrollIntoView(link);
});

// Handle click on toggle btn when screen width is small
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
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

// filter projects
const categoryBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

categoryBtnContainer.addEventListener('click', (event) => {
    const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
    if(filter == null){
        return;
    }

    // remove selection from the previous item and select the new one
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
    target.classList.add('selected');

    projectContainer.classList.add('anim-out');

    setTimeout(() => {        
        projects.forEach((project) => {
            if(filter === '*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            }
            else{
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 300);

});


// activate menu when scrolled to specific content

// 1. 모든 섹션 요소들과 메뉴 아이디를 가지고 온다.
// 2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다.
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화시킨다

const sectionIds = [
    '#home',
    '#about',
    '#skills',
    '#work',
//  'testimonials',
    '#contact',
];

const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[data-link="${id}"]`));

let selectedNavIdx = getIdxOfSectionOnViewPort();
let selectedNavItem = navItems[0];
function selectNavItem(selected){
    selectedNavItem.classList.remove('selected');
    selectedNavItem = selected;
    selectedNavItem.classList.add('selected');
}

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
}

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting && entry.intersectionRatio > 0){
            const index = sectionIds.indexOf(`#${entry.target.id}`);

            // 스크롤링이 아래로 되어서 페이지가 올라옴
            if(entry.boundingClientRect.y < 0){
                selectedNavIdx = index+1;
            }
            else{
                selectedNavIdx = index-1;
            }
        }
    });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));

window.addEventListener('wheel', () => {
        
    if(window.scrollY === 0){
        selectedNavIdx = 0;
    }
    else if( Math.floor(window.scrollY + window.innerHeight)+1 === document.body.clientHeight){
        selectedNavIdx = navItems.length-1;
    }
    selectNavItem(navItems[selectedNavIdx]);
});


// 새로고침시 navbar의 home이 select되는 문제 해결
window.addEventListener('load', () => {
    selectNavItem(navItems[selectedNavIdx]);
});

// function: scrolling to selector
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
    selectNavItem(navItems[sectionIds.indexOf(selector)]);
}

// section의 위치를 이용해서 section idx를 찾음
function getIdxOfSectionOnViewPort(){
    const section = document.elementFromPoint(window.innerWidth / 2, window.innerHeight*(2/3)).closest('section');
    const idx = sectionIds.indexOf(`#${section.id}`);
    return idx;
}

/*
// my code
const sections = document.querySelectorAll('section');
const options = {
    root: null,
    rootMargin: '10px',
    threshold: 0.8,   // 어떻게 하면 모바일에서 보이게 할까?
}

const menus = document.querySelectorAll('.navbar__menu__item');
const callback= (entries, observer) => {
    entries.forEach(entry => {
        const eId = "#"+entry.target.id;
        
        if(entry.isIntersecting){    //entry id
            menus.forEach( menu => {
                if(menu.dataset.link === eId){
                    menu.classList.add('selected');
                } 
            });
        }
        else{
            menus.forEach( menu => {
                if(menu.dataset.link === eId){
                    menu.classList.remove('selected');
                }
            });

        }
    });
}

const observer = new IntersectionObserver(callback, options);

sections.forEach( section => observer.observe(section));
*/