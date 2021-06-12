/* SCROLL EVENT */
window.addEventListener('scroll',() =>{
    const navbar = document.getElementById('navbar');
    const scr = document.getElementById('scroll-up-btn');
    if(window.scrollY > 20){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }

    if(window.scrollY > 500){
        scr.classList.add("show");
    }
    else{
        scr.classList.remove("show");
    }
})

/*MENU FUNCTIONS*/
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const icon = menuBtn.querySelector('i');
menuBtn.addEventListener('click',() =>{
    menu.classList.toggle("active");
    menu.classList.toggle("navbarmenu");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
    const scrollBtn = document.getElementById('scroll-up-btn');
    scrollBtn.classList.toggle("show");
})

let links = menu.querySelector('li');
console.log(links);
links.addEventListener('click',() =>{
    menu.classList.toggle("active");
    menu.classList.toggle("navbarmenu");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
})

links = links.nextElementSibling;
console.log(links);
links.addEventListener('click',() =>{
    menu.classList.toggle("active");
    menu.classList.toggle("navbarmenu");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
})

links = links.nextElementSibling;
console.log(links);
links.addEventListener('click',() =>{
    menu.classList.toggle("active");
    menu.classList.toggle("navbarmenu");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
})

links = links.nextElementSibling;
console.log(links);
links.addEventListener('click',() =>{
    menu.classList.toggle("active");
    menu.classList.toggle("navbarmenu");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
})

links = links.nextElementSibling;
console.log(links);
links.addEventListener('click',() =>{
    menu.classList.toggle("active");
    menu.classList.toggle("navbarmenu");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
})

links = links.nextElementSibling;
console.log(links);
links.addEventListener('click',() =>{
    menu.classList.toggle("active");
    menu.classList.toggle("navbarmenu");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
})