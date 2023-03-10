"use strict";

let main = document.getElementById("main");
let nav = document.getElementById("nav");
let navbutton = document.getElementById("navbutton");
let menubutton = document.getElementById("menubutton");
let mainbutton1 = document.getElementById("mainbutton1");
let mainbutton2 = document.getElementById("mainbutton2");
let mainbutton3 = document.getElementById("mainbutton3");
let list = document.getElementById("list");
let mainwork = document.getElementById("mainwork");
let mainstudies = document.getElementById("mainstudies");
let maininterests = document.getElementById("maininterests");
let menuopen = false;
let phone = document.getElementById("phone");
let mail = document.getElementById("mail");
let github = document.getElementById("github");
let linkedin = document.getElementById("linkedin");
let home = document.getElementById("home");
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        nav.classList.add('hide');
    } else {
        // Scrolling up
        nav.classList.remove('hide');
    }
    lastScrollTop = currentScrollTop;
});

function toWork() {
    toMain();
    mainwork.classList.remove("display-none");
    mainstudies.classList.add("display-none");
    maininterests.classList.add("display-none");
}

function toStudies() {
    toMain();
    mainstudies.classList.remove("display-none");
    mainwork.classList.add("display-none");
    maininterests.classList.add("display-none");
}

function toInterests() {
    toMain();
    maininterests.classList.remove("display-none");
    mainwork.classList.add("display-none");
    mainstudies.classList.add("display-none");
}

function toMain() {
    nav.style.display = "none";
    main.style.display = "grid";
}

navbutton.addEventListener("click", function () {
    if (menuopen == false) {
        navbutton.style.transform = 'rotate(360deg)';
        setTimeout(function () {
            menubutton.classList.remove("fa-bars");
            menubutton.classList.add("fa-times");
            list.classList.remove('display-none');
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            menuopen = true;
        }, 500);
    } else {
        navbutton.style.transform = 'rotate(-360deg)';
        setTimeout(function () {
            menubutton.classList.remove("fa-times");
            menubutton.classList.add("fa-bars");
            list.classList.add('display-none');
            menuopen = false;
        }, 500);
    }
});

mainbutton1.addEventListener("click", function () {
    mainbutton1.style.transform = 'rotate(-10deg)';
    setTimeout(function () {
        toWork();
        mainbutton1.style.transform = 'none';
    }, 700);
});

mainbutton2.addEventListener("click", function () {
    mainbutton2.style.transform = 'rotate(-10deg)';
    setTimeout(function () {
        toStudies();
        mainbutton2.style.transform = 'none';
    }, 700);
});

mainbutton3.addEventListener("click", function () {
    mainbutton3.style.transform = 'rotate(-10deg)';
    setTimeout(function () {
        toInterests();
        mainbutton3.style.transform = 'none';
    }, 700);
});

phone.addEventListener("click", function (event) {
    event.preventDefault();
    phone.classList.add('shake');
    setTimeout(function () {
        window.location.href = event.target.href;
        phone.classList.remove('shake');
    }, 1200);
});

mail.addEventListener("click", function (event) {
    event.preventDefault();
    mail.classList.add('spinner');
    setTimeout(function () {
        window.location.href = event.target.href;
        mail.classList.remove('spinner');
    }, 2000);
});

github.addEventListener("click", function (event) {
    event.preventDefault();
    github.classList.add('fadeOut');
    setTimeout(function () {
        window.open(event.target.href, '_blank');
        github.classList.remove('fadeOut');
    }, 1200);
});

linkedin.addEventListener("click", function (event) {
    event.preventDefault();
    linkedin.classList.add('heartbeat');
    setTimeout(function () {
        window.open(event.target.href, '_blank');
        linkedin.classList.remove('heartbeat');
    }, 1500);
});

home.addEventListener("click", function (event) {
    event.preventDefault();
    home.classList.add('zoomerOut');
    setTimeout(function () {
        window.location.href = event.target.href;
        setTimeout(function () {
            home.classList.remove('zoomerOut');
        }, 100);
    }, 800);
});

//# sourceMappingURL=script.js.map