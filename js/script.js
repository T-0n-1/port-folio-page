/* TO CHECK WHETHER THE CURSOR IS HIDDEN OR NOT */
const element = document.documentElement;
const style = getComputedStyle(element);

if (style.cursor === 'none') {
    // The cursor is hidden
    const main = document.getElementById("main");
    const nav = document.getElementById("nav");
    const navbutton = document.getElementById("navbutton");
    const mainbutton1 = document.getElementById("mainbutton1");
    const mainbutton2 = document.getElementById("mainbutton2");
    const mainbutton3 = document.getElementById("mainbutton3");

    navbutton.addEventListener("click", function () {
        navbutton.style.transform = 'rotate(-10deg)';
        setTimeout(function () {
            main.style.display = "none";
            nav.style.display = "grid";
        }, 500);

    });

    mainbutton1.addEventListener("click", function () {
        mainbutton1.style.transform = 'rotate(-10deg)';
        setTimeout(function () {
            nav.style.display = "none";
            main.style.display = "grid";
        }, 300);
    });
    mainbutton2.addEventListener("click", function () {
        mainbutton2.style.transform = 'rotate(-10deg)';
        setTimeout(function () {
            nav.style.display = "none";
            main.style.display = "grid";
        }, 300);
    });
    mainbutton3.addEventListener("click", function () {
        mainbutton3.style.transform = 'rotate(-10deg)';
        setTimeout(function () {
            nav.style.display = "none";
            main.style.display = "grid";
        }, 300);
    });
} else {
    // The cursor is visible
    const main = document.getElementById("main");
    const nav = document.getElementById("nav");
    const navbutton = document.getElementById("navbutton");
    const mainbutton1 = document.getElementById("mainbutton1");
    const mainbutton2 = document.getElementById("mainbutton2");
    const mainbutton3 = document.getElementById("mainbutton3");

    navbutton.addEventListener("click", function () {
        main.style.display = "none";
        nav.style.display = "grid";
    });

    mainbutton1.addEventListener("click", function () {
        nav.style.display = "none";
        main.style.display = "grid";
    });
    mainbutton2.addEventListener("click", function () {
        nav.style.display = "none";
        main.style.display = "grid";
    });
    mainbutton3.addEventListener("click", function () {
        nav.style.display = "none";
        main.style.display = "grid";
    });
}