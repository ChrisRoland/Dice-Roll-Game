function rollDice() {
  // Generate random numbers between 1 and 6 for both players
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Select the  imgs for player results
  let img1 = document.querySelector(".img1");

  let img2 = document.querySelector(".img2");

  // Add rotate class to both images
  img1.classList.add("rotate");
  img2.classList.add("rotate");

  img1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

  img2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

  // Remove rotate class after animation ends
  setTimeout(() => {
    img1.classList.remove("rotate");
    img2.classList.remove("rotate");
  }, 1000);

  // Determine the winner and update the h1 text
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").textContent = "🚩 Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h2").textContent = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h2").textContent = "It's a Draw! 🏴‍☠️";
  }
}

// Call the function to roll the dice and determine the winner initially
rollDice();

//event listener to the refresh button to roll the dice again without refreshing the page
document.getElementById("refreshButton").addEventListener("click", rollDice);
