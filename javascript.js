const navToggle = document.querySelector("#navToggle");
const nav = document.querySelectorAll("nav");
const navIcon = document.querySelectorAll(".nav-toggle-image");
const openIcon = document.querySelector("#openIcon");


navToggle.addEventListener("click", openToggle)

function openToggle() {
    nav.forEach(navs => navs.classList.toggle("open"));
    navIcon.forEach(icons => icons.classList.toggle("hidden"));
}

window.addEventListener("resize", edgeCase)

function edgeCase() {
    if (document.body.clientWidth > 816) {
        nav.forEach(navs => navs.classList.remove("open"));
        navIcon.forEach(icons => {
            icons.classList.add("hidden");    
        });
        openIcon.classList.remove("hidden");
    }
}



