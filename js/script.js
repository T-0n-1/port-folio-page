"use strict";

/* TO CHECK WHETHER THE CURSOR IS HIDDEN OR NOT */
var element = document.documentElement;
var style = getComputedStyle(element);
if (style.cursor === 'none') {
  // The cursor is hidden
  var main = document.getElementById("main");
  var nav = document.getElementById("nav");
  var navbutton = document.getElementById("navbutton");
  var mainbutton1 = document.getElementById("mainbutton1");
  var mainbutton2 = document.getElementById("mainbutton2");
  var mainbutton3 = document.getElementById("mainbutton3");
  navbutton.addEventListener("click", function () {
    navbutton.style.transform = 'rotate(-10deg)';
    setTimeout(function () {
      main.style.display = "none";
      nav.style.display = "grid";
    }, 5000);
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
  var _main = document.getElementById("main");
  var _nav = document.getElementById("nav");
  var _navbutton = document.getElementById("navbutton");
  var _mainbutton = document.getElementById("mainbutton1");
  var _mainbutton2 = document.getElementById("mainbutton2");
  var _mainbutton3 = document.getElementById("mainbutton3");
  _navbutton.addEventListener("click", function () {
    _main.style.display = "none";
    _nav.style.display = "grid";
  });
  _mainbutton.addEventListener("click", function () {
    _nav.style.display = "none";
    _main.style.display = "grid";
  });
  _mainbutton2.addEventListener("click", function () {
    _nav.style.display = "none";
    _main.style.display = "grid";
  });
  _mainbutton3.addEventListener("click", function () {
    _nav.style.display = "none";
    _main.style.display = "grid";
  });
}

//# sourceMappingURL=script.js.map
