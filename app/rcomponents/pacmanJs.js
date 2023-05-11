var images = [
    'dots.png',
    'dots2.png',
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '11.png'
  ];
  var currentImage = 0;
  
  function changeImage(imageIndex) {
    currentImage = imageIndex;
    document.getElementById("dots").src = images[currentImage];
  }
  
  document.addEventListener("scroll", function(event) {
    var currentScroll = window.scrollY / (document.body.offsetHeight - window.innerHeight) * 100;
    if (currentScroll >= 10 && currentScroll <= 33) {
      var newImageIndex = Math.floor((currentScroll - 10) / 2.5);
      if (newImageIndex !== currentImage) {
        changeImage(newImageIndex);
      }
    }
  });