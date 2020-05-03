window.onscroll = function() {
    let nav = document.getElementById("homeNav");
    let ul = document.getElementById("homeUl");
    let logo = document.getElementById("logo");

    if (window.scrollY > 200) {
        console.log("scroll");
        nav.classList.add("nav-scrolled");
        ul.classList.add("ul-scrolled");
        logo.classList.add("img-scrolled");
    } else {
        console.log("scroll menor")
        nav.classList.remove("nav-scrolled");
        ul.classList.remove("ul-scrolled");
        logo.classList.remove("img-scrolled");
    }
};