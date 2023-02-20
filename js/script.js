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