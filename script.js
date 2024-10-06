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



// Menu 

function hamburgerMenu(){
  var x = document.getElementById("myLinks");
  if(x.style.display === "block"){
    x.style.display = "none";
  }else{
    x.style.display = "block";
  }
}