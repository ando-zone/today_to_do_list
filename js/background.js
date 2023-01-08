const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const backgroundBox = document.getElementById("background_box")

backgroundBox.style.backgroundImage = `url('img/${chosenImage}')`;

