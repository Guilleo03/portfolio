window.onscroll = function() {
    let nav = document.getElementById("homeNav");
    let home = document.getElementById("navHome");
    let works = document.getElementById("navWorks");
    let about = document.getElementById("navAboutMe");
    let logo = document.getElementById("logo");
    let worksList = document.getElementById("navWorkList");

    if (window.scrollY > 300) {
        nav.classList.add("nav-scrolled");
        home.classList.add("ul-scrolled");
        works.classList.add("ul-scrolled");
        about.classList.add("ul-scrolled");
        logo.classList.add("img-scrolled");
        worksList.classList.add("ul-scrolled");
    } else {
        nav.classList.remove("nav-scrolled");
        home.classList.remove("ul-scrolled");
        works.classList.remove("ul-scrolled");
        about.classList.remove("ul-scrolled");
        logo.classList.remove("img-scrolled");
        worksList.classList.remove("ul-scrolled");
    }
};