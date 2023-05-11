document.getElementById("pokeball").addEventListener("mouseover", function() {
    document.getElementById("pokeball").style.cursor = "pointer";
});


var pikachus = ['pikachujump.gif', 'pikachurun.gif','textbox.gif', 'textstill.png'];
var currentPikachu = 0;

var pokeball = document.getElementById("pokeball");
var pikachujump = document.getElementById("pikachujump");
var pikachurun = document.getElementById("pikachurun");
var textbox = document.getElementById("textbox");
var textstill = document.getElementById("textstill");



pokeball.addEventListener("click", handleClick);
pokeball.addEventListener("contextmenu", handleClick);

function handleClick(event) {
  event.preventDefault();
  pokeball.style.display = "none";
  pikachujump.style.display = "block";
  setTimeout(function() {
    pikachujump.style.display = "none";
    pikachurun.style.display = "block";
    setTimeout(function() {
      pikachurun.style.display = "none";
      textbox.style.display = "block";
      setTimeout(function(){
        textbox.style.display = "none";
        textstill.style.display = "block";
    },3660)
    }, 1500);
  }, 1000);
};
  

pikachurun.addEventListener("animationend", function() {
  pikachurun.style.display = "none";
  
});
