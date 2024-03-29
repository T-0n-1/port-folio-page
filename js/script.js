"use strict";

let img = document.getElementById('header-image');
let main = document.getElementById("main");
let nav = document.getElementById("nav");
let gallery = document.getElementById("gallery");
let gallerybutton = document.getElementById("gallery-button");
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
let turnaround = false;
let phone = document.getElementById("phone");
let mail = document.getElementById("mail");
let github = document.getElementById("github");
let linkedin = document.getElementById("linkedin");
let home = document.getElementById("home");

function toWork() {
    toMain();
    mainwork.classList.remove("display-none");
    img.src = '../images/me1.webp';
    mainstudies.classList.add("display-none");
    maininterests.classList.add("display-none");
}

function toStudies() {
    toMain();
    mainstudies.classList.remove("display-none");
    img.src = 'images/me2.webp';
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

function toGallery() {
    nav.style.display = "none";
    gallery.style.display = "grid";
}

function fromGallery() {
    gallery.style.display = "none";
    nav.style.display = "grid";
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
        linkedin.classList.remove('fadeOut');
    }, 1200);
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

// Select all images with class names that end with "-image"
const images = document.querySelectorAll('[class$="-image"]');

// Loop through images and add click event listener to each one
images.forEach(image => {
    image.addEventListener('click', () => {
        // Code to run when image is clicked
        toGallery();
    });
});

gallerybutton.addEventListener("click", function () {
    if (turnaround == false) {
        gallerybutton.style.transform = 'rotate(360deg)';
        setTimeout(function () {
            turnaround = true;
            fromGallery();
        }, 700);
    } else {
        gallerybutton.style.transform = 'rotate(-360deg)';
        setTimeout(function () {
            turnaround = false;
            fromGallery();
        }, 700);
    }
});

/*FLIPPER*/
// Get all flip containers
const flipContainers = document.querySelectorAll('.flip-container');

// Set a default scroll threshold
let scrollThreshold = 12;

// Check if the browser is Safari
if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    // This is Safari
    // Add your Safari-specific code here
    scrollThreshold = 27;
}

const smallScreenScrollThreshold = 100; // Set a smaller scroll threshold for small screens

// Check if screen is smaller than 768 pixels
if (window.matchMedia('(max-width: 768px)').matches) {
    scrollThreshold = smallScreenScrollThreshold;
}

const galleryImages = document.querySelectorAll('.front');

let currentImage = null;

galleryImages.forEach((galleryImg) => {
    galleryImg.addEventListener('click', (event) => {
        const image = event.target;
        const {
            width,
            height,
            top,
            left
        } = image.getBoundingClientRect();
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const offsetX = centerX - (left + (width / 2));
        const offsetY = centerY - (top + (height / 2));
        const zIndex = currentImage === image ? 1 : 2;

        image.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${zIndex})`;
        image.style.zIndex = zIndex;

        if (currentImage !== image) {
            if (currentImage) {
                currentImage.style.transform = '';
                currentImage.style.zIndex = 1;
            }
            currentImage = image;
        } else {
            currentImage = null;
        }
    });
});

window.addEventListener('resize', () => {
    if (currentImage) {
        const {
            width,
            height,
            top,
            left
        } = currentImage.getBoundingClientRect();
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const offsetX = centerX - (left + (width / 2));
        const offsetY = centerY - (top + (height / 2));
        currentImage.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(2)`;
    }
});

// Set array of image URLs
const imageUrls = [];
for (let i = 1; i <= 49; i++) {
    imageUrls.push(`image${i}.webp`);
}

let shownImageUrls = []; // Keep track of image URLs that have been shown

// Add event listener for scroll event
window.addEventListener('scroll', () => {
    // Get current scroll position
    const scrollPosition = window.scrollY;

    // If scroll position is greater than threshold, flip elements in random order
    if (scrollPosition > scrollThreshold) {
        // Create array of flip containers
        const flipContainersArray = Array.from(flipContainers);

        // Shuffle the array to get a random order
        const shuffledFlipContainersArray = flipContainersArray.sort(() => Math.random() - 0.5);

        // Loop through the shuffled array and add flipped class with delay to each element
        shuffledFlipContainersArray.forEach((flipContainer) => {
            // Get a random image URL that has not been shown yet
            let randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
            while (shownImageUrls.includes(randomImageUrl)) { // Loop until a unique image URL is found
                randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
            }
            shownImageUrls.push(randomImageUrl); // Add the image URL to the list of shown images

            // If all image URLs have been shown, reset the list of shown images
            if (shownImageUrls.length === imageUrls.length) {
                shownImageUrls = [];
            }

            // Set background image for front and back elements
            flipContainer.querySelector('.front').style.backgroundImage = `url('../gallery/${randomImageUrl}')`;
        });
    }
});

//# sourceMappingURL=script.js.map