// Go to the top of the page

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

// TypeWriter function

var currentFileName = window.location.pathname.split("/").pop();

var currentLanguage = currentFileName === 'english-version.html' ? 'en' : 'hu';

var textArrayEn = ["Webdeveloper", "Frontend developer", "Coder", "Programmer"];
var textArrayHu = ["Webfejlesztő", "Frontend Fejlesztő", "Informatikus", "Programozó"];

var textArray = currentLanguage === 'en' ? textArrayEn : textArrayHu;

var typeWriterElement = document.getElementById('typewriter');

function delWriter(text, i, cb) {
    if (i >= 0) {
        typeWriterElement.innerHTML = text.substring(0, i--);
        var rndBack = 10 + Math.random() * 100;
        setTimeout(function () {
            delWriter(text, i, cb);
        }, rndBack);
    } else if (typeof cb == 'function') {
        setTimeout(cb, 1000);
    }
}

function typeWriter(text, i, cb) {
    if (i < text.length + 1) {
        typeWriterElement.innerHTML = text.substring(0, i++);
        var rndTyping = 250 - Math.random() * 100;
        setTimeout(function () {
            typeWriter(text, i, cb);
        }, rndTyping);
    } else if (i === text.length + 1) {
        setTimeout(function () {
            delWriter(text, i, cb);
        }, 1000);
    }
}

function StartWriter(i) {
    if (typeof textArray[i] == "undefined") {
        setTimeout(function () {
            StartWriter(0);
        }, 1000);
    } else {
        typeWriter(textArray[i], 0, function () {
            StartWriter(i + 1);
        });
    }
}

setTimeout(function () {
    StartWriter(0);
}, 1000);
