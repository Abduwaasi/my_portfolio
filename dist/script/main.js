// Dom element selection
const navBar = document.querySelector(".nav-bar");
const menuNav = document.querySelector(".menu-nav");
const branding = document.querySelector(".branding");
const navList = document.querySelector(".nav-list");
const listItem = document.querySelectorAll(".list-item")


let showMenu = false;
navBar.addEventListener("click",toggleMenu);

function toggleMenu(){
    if(!showMenu){
        navBar.classList.add("close");
        menuNav.classList.add("open");
        branding.classList.add("open");
        navList.classList.add("open");
        listItem.forEach(item => item.classList.add("open"));
        // Set menu State
        showMenu = true;

    }
    else{
           navBar.classList.remove("close");
        menuNav.classList.remove("open");
        branding.classList.remove("open");
        navList.classList.remove("open");
        listItem.forEach(item => item.classList.remove("open"));
        // Set menu State
        showMenu = false;
    }
}