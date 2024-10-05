

//Oldal tetejére gomb

let backtotop = document.getElementById("#felulre");

windows.onscroll = function() {
  scrollFunction();
}

function scrollFunction(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    backtotop.style.display = "block";
  } else {
    backtotop.style.display = "none";
  }
}

function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


