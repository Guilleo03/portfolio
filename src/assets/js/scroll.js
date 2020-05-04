window.onscroll = function() {
    let nav = document.getElementById("homeNav");
    let home = document.getElementById("navHome");
    let works = document.getElementById("navWorks");
    let about = document.getElementById("navAboutMe");
    let contact = document.getElementById("navContact");
    let logo = document.getElementById("logo");

    if (window.scrollY > 300) {
        console.log("scroll");
        nav.classList.add("nav-scrolled");
        home.classList.add("ul-scrolled");
        works.classList.add("ul-scrolled");
        about.classList.add("ul-scrolled");
        contact.classList.add("ul-scrolled");
        logo.classList.add("img-scrolled");
    } else {
        console.log("scroll menor")
        nav.classList.remove("nav-scrolled");
        home.classList.remove("ul-scrolled");
        works.classList.remove("ul-scrolled");
        about.classList.remove("ul-scrolled");
        contact.classList.remove("ul-scrolled");
        logo.classList.remove("img-scrolled");
    }
};