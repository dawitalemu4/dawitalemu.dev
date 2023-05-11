let gif = document.getElementById("luffy");
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
