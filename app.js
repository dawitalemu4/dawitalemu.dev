


const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

document.getElementById('home').addEventListener('click', function(event) {
  event.preventDefault();
  location.reload();
});

document.getElementById('experience').addEventListener('click', function(event) {
  event.preventDefault();
  var targetPosition = document.body.scrollHeight * 0.45;
  window.scrollTo({
    top: targetPosition,
    left: 0,
    behavior: 'smooth'
  });
  
});

document.getElementById('projects').addEventListener('click', function(event) {
  event.preventDefault();
  var targetPosition = document.body.scrollHeight * 0.66;
  window.scrollTo({
    top: targetPosition,
    left: 0,
    behavior: 'smooth'
  });
 
});

document.getElementById('contact').addEventListener('click', function(event) {
  event.preventDefault();
  var targetPosition = document.body.scrollHeight * 1;
  window.scrollTo({
    top: targetPosition,
    left: 0,
    behavior: 'smooth'
  });
});

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
  console.log(entry)
  if (entry.isIntersecting){
    entry.target.classList.add('show');
}
else{
  entry.target.classList.remove('show');  

}
});

});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));






const eyes = document.querySelectorAll('.eye')
const anchor = document.getElementById ('main__img')
const rekt = anchor.getBoundingClientRect();
const anchorX = rekt.left + rekt.width / 2;
const anchorY = rekt.top + rekt.height / 2;
  


document.addEventListener('mousemove', (e) => {
  


  const mouseX = e.clientX;
  const mouseY = e.clientY;
  
  
  const speed = 2.5;
  const limit = 7; // set the maximum distance in pixels
  eyes.forEach(eye => {
      let x = (mouseX - anchorX) * speed;
      let y = (mouseY - anchorY) * speed;
      x = Math.min(limit, Math.max(-limit, x)); // limit the maximum distance on the x-axis
      y = Math.min(limit, Math.max(-limit, y)); // limit the maximum distance on the y-axis
      eye.style.transform = `translate(${x}px, ${y}px)`;
  })
  });


  var scrollCounter = 0;

  document.addEventListener("wheel", function(event) {
      if ((window.scrollY / (document.body.offsetHeight - window.innerHeight)) > 0.1 && (window.scrollY / (document.body.offsetHeight - window.innerHeight)) < 0.33) {
          event.preventDefault();
          scrollCounter++;
          if (scrollCounter === 1) {
              if (event.deltaY < 0) {
                  currentImage--;
                  if(currentImage < 0) currentImage = images.length - 1;
              } else {
                  currentImage++;
                  if(currentImage === images.length) currentImage = 0;
              }
              for (var i = 0; i < images.length; i++) {
                  if (currentImage === i) {
                      document.getElementById("dots").src = images[i];
                  }
              }
              scrollCounter = 0;
          }
      }
  });

 
    

    


  let gif = document.getElementById("game-gif");
let gifs = ["hatclose.png", "hatmid.png", "hatopen.png"];
let currentimages = 0;
let message = document.getElementsByTagName("h5")[0];
let gameIntervalId;
let startTime;

// Start the game
startGame();

// Add click and contextmenu event listeners to the gif
gif.addEventListener("click", onClick);
gif.addEventListener("contextmenu", onClick);

// Add mouseover event listener to the gif
gif.addEventListener("mouseover", function() {
  gif.style.cursor = "pointer";
});

// Start the game loop
function startGame() {
  message.style.visibility = "hidden";
  startTime = Date.now();
  gif.src = "luffy fish.gif";
  gameIntervalId = setInterval(function() {
    startTime = Date.now();
    gif.src = "luffy fish.gif";
  }, 5040);
}

// Handle click event
function onClick(event) {
  event.preventDefault();
  let now = Date.now();
  if (now - startTime >= 3500 && now - startTime <= 5000) {
    message.style.visibility = "hidden";
    displayWinOutcome();
  } else {
    message.style.visibility = "visible";
    setTimeout(function() {
      message.style.visibility = "hidden";
    }, 2000);
  }
}

// Display win outcome
function displayWinOutcome() {
  clearInterval(gameIntervalId);
  let i = 0;
  gameIntervalId = setInterval(function() {
    gif.src = gifs[i];
    i++;
    if (i === gifs.length) {
      clearInterval(gameIntervalId);
      gif.src = gifs[i-1];
      message.style.visibility = "hidden";
    }
    if(i == gifs[1]) {message.style.visibility = "hidden";}
  }, 400);
}


 

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


