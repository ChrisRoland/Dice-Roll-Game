const randomNumber1 = Math.floor(Math.random() * 6) + 1;

const randomNumber2 = Math.floor(Math.random() * 6) + 1;

let img1 = document.querySelector(".img1");

let img2 = document.querySelector(".img2");

// Set the src attribute to the corresponding dice image
img1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

img2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

//Display winner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";

} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";

} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "It's a Draw! 🏴‍☠️";

} else {
    document.querySelector("h1").textContent = "Refresh Me";
};

// Add Button to roll die
document.getElementById("refreshButton").addEventListener("click", function() {
    location.reload(); // Refresh the page
});
