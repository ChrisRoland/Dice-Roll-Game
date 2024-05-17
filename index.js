// const randomNumber1 = Math.floor(Math.random() * 6) + 1;

// const randomNumber2 = Math.floor(Math.random() * 6) + 1;

// let img1 = document.querySelector(".img1");

// let img2 = document.querySelector(".img2");

// // Set the src attribute to the corresponding dice image
// img1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

// img2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

// //Display winner
// if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").textContent = "🚩 Player 1 Wins!";

// } else if (randomNumber1 < randomNumber2) {
//     document.querySelector("h1").textContent = "Player 2 Wins! 🚩";

// } else if (randomNumber1 === randomNumber2) {
//     document.querySelector("h1").textContent = "It's a Draw! 🏴‍☠️";
// }

// // Add Button to roll die
// document.getElementById("refreshButton").addEventListener("click", function() {
//     location.reload(); // Refresh the page
// });


function rollDice() {
    // Generate random numbers between 1 and 6 for both players
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Select the left <img> element for player 1
    let img1 = document.querySelector(".img1");

    // Select the right <img> element for player 2
    let img2 = document.querySelector(".img2");

    // Set the src attribute to the corresponding dice image for player 1
    img1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

    // Set the src attribute to the corresponding dice image for player 2
    img2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

    // Determine the winner and update the h1 text
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1").textContent = "It's a Draw! 🏴‍☠️";
    }
}

// Call the function to roll the dice and determine the winner initially
rollDice();

// Add event listener to the refresh button to roll the dice again without refreshing the page
document.getElementById("refreshButton").addEventListener("click", rollDice);
