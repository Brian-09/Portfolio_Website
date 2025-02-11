var listOfImages = ["./assets/images/SS-color-theory.png", "./assets/images/SS-orangest-oranges.png", "./assets/images/SS-picture-grid.png"];
var index = 0;
const photo = document.getElementById("galleryImg");

// Creates a timer that changes the gallery image to the next one in line every 5 seconds
var timer = setInterval(function() {
    index++;
    if (index >= listOfImages.length) {
        index = 0;
    }

    photo.src = listOfImages[index];
}, 5000);