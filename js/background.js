const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const backgroundBox = document.getElementById("background_box")

backgroundBox.style.backgroundImage = `url('img/${chosenImage}')`;

