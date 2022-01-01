document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("nav-ul").classList.toggle("show");
    if (document.getElementById("menu_icon").getAttribute("src") === "images/icon-hamburger.svg") {
        document.getElementById("menu_icon").setAttribute("src", "images/close_black_36dp.svg");
    } else {
        document.getElementById("menu_icon").setAttribute("src", "images/icon-hamburger.svg");
    };
});