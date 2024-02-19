function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
window.addEventListener("scroll", reveal);


windows.onscroll = function (){
  stickyNav();
}


var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function stickyNav (){
  if(windows.pageYOffset >= sticky){
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

