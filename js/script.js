"use strict";

let main = document.getElementById("main");
let nav = document.getElementById("nav");
let navbutton = document.getElementById("navbutton");
let mainbutton1 = document.getElementById("mainbutton1");
let mainbutton2 = document.getElementById("mainbutton2");
let mainbutton3 = document.getElementById("mainbutton3");

function toMain() {
    nav.style.display = "none";
    main.style.display = "grid";
}

function toNav() {
    nav.style.display = "grid";
    main.style.display = "none";
}

navbutton.addEventListener("touchstart", function () {
    navbutton.style.transform = 'rotate(-10deg)';
    setTimeout(toNav, 700);
});
mainbutton1.addEventListener("touchstart", function () {
    mainbutton1.style.transform = 'rotate(-10deg)';
    setTimeout(toMain, 700);
});
mainbutton2.addEventListener("touchstart", function () {
    mainbutton2.style.transform = 'rotate(-10deg)';
    setTimeout(toMain, 700);
});
mainbutton3.addEventListener("touchstart", function () {
    mainbutton3.style.transform = 'rotate(-10deg)';
    setTimeout(toMain, 700);
});

//# sourceMappingURL=script.js.map