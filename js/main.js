$('.slider').slick();

function openMenu() {
    var menu = document.getElementById("menu");
    var body = document.getElementsByTagName("body");

    menu.classList.add("open-menu");
    body[0].classList.add("no-scroll");
}

function closeMenu() {
    var menu = document.getElementById("menu");
    var body = document.getElementsByTagName("body");

    menu.classList.remove("open-menu");
    body[0].classList.remove("no-scroll");
}