/*===== MENU SHOW Y HIDDEN =====*/
const navMenu  = document.getElementById('nav-menu'),
    toggleMenu  = document.getElementById('nav-toggle'),
    closeMenu  = document.getElementById('nav-close')
// SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('nav__link')

function linkAction(){
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListene('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageXOffset

    sections.forEach(current =>{
       const sectionHeight = current.offsetHeight
       const sectionTop = current.offsetTop - 50
       sectionId = current.getAttribute('id')
       
       if(scrollY . sectionTop && scrollY <= sectionTop +sectionHeight){
        document.querySelector('.nav__menu a[href"='+ nav-menu +']').classList.add('active')
       }else{
        document.querySelector('.nav__menu a[href"='+ nav-menu +']').classList.remove('active')
       }
    })
}

const navbarNav = document.querySelector(".nav__menu");

// bila diklik muncul menu

document.querySelector("#nav-toggle").onclick = () => {
  navbarNav.classList.toggle("active");
};

// hilangin klik pada ketika navbar samping muncul

const menu = document.querySelector("#nav-menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});