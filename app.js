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
  var gameContainer = document.getElementById("game-container");
  var rect = gameContainer.getBoundingClientRect();
  window.scrollTo({
    top: rect.top,
    left: 0,
    behavior: 'smooth'
  });
});

document.getElementById('projects').addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollTo({
    top: 3400,
    left: 0,
    behavior: 'smooth'
  });
 
});

document.getElementById('contact').addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollTo({
    top: 5000,
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
  
console.log(e)

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
  });

  let gif = document.getElementById("game-gif");
  let gifs = ["hatclose.png", "hatmid.png", "hatopen.png"];
  let currentimages = 0;
  let message = document.getElementsByTagName("h5")[0];
  let gameIntervalId;
  let startTime;
  
  // Start the game
  startGame();
  
  // Add click event listener to the gif
  gif.addEventListener("click", function() {
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
  });
  
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
